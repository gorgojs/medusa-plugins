import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import jwt from "jsonwebtoken"
import { FEED_MODULE } from "@gorgo/medusa-feed-yandex/modules/feed"

medusaIntegrationTestRunner({
  testSuite: ({ api, getContainer }) => {
    describe("GET|PATCH|DELETE /admin/feeds/:id", () => {
      const headers: Record<string, string> = {}
      let container: ReturnType<typeof getContainer>
      let createdFeedId: string

      beforeAll(async () => {
        container = getContainer()

        const auth = container.resolve("auth")
        const userService = container.resolve("user")

        const user = await userService.createUsers({
          email: "admin@medusa.test",
        })

        const authIdentity = await auth.createAuthIdentities({
          provider_identities: [
            {
              provider: "emailpass",
              entity_id: "admin@medusa.test",
              provider_metadata: {
                password: "supersecret",
              },
            },
          ],
          app_metadata: {
            user_id: user.id,
          },
        })

        const token = jwt.sign(
          {
            actor_id: user.id,
            actor_type: "user",
            auth_identity_id: authIdentity.id,
          },
          "supersecret",
          { expiresIn: "1d" }
        )

        headers["authorization"] = `Bearer ${token}`

        const service: any = container.resolve(FEED_MODULE)
        const created = await service.createFeeds({
          title: "Original Feed",
          file_name: "original.xml",
          is_active: true,
          schedule: 10,
        })

        createdFeedId = created.id
      })

      it("GET /admin/feeds/:id — get feed", async () => {
        const res = await api.get(`/admin/feeds/${createdFeedId}`, { headers })

        expect(res.status).toBe(200)
        expect(res.data.feed).toMatchObject({
          id: createdFeedId,
          title: "Original Feed",
          file_name: "original.xml",
        })
      })

      it("GET /admin/feeds/:id — 404 for non-existent feed", async () => {
        const res = await api.get("/admin/feeds/non-existent-id", {
          headers,
          validateStatus: () => true,
        })

        expect(res.status).toBe(404)
      })

      it("PATCH /admin/feeds/:id — update feed", async () => {
        const service: any = container.resolve(FEED_MODULE)
        const created = await service.createFeeds({
          title: "To Be Updated",
          file_name: "update-me.xml",
          is_active: false,
          schedule: 30,
        })

        const res = await api.patch(
          `/admin/feeds/${created.id}`,
          {
            id: created.id,
            title: "Updated Title",
            schedule: 60,
          },
          { headers }
        )

        expect(res.status).toBe(200)
        expect(res.data.feed).toMatchObject({
          id: created.id,
          title: "Updated Title",
          schedule: 60,
        })
      })

      it("DELETE /admin/feeds/:id — delete feed", async () => {
        const res = await api.delete(`/admin/feeds/${createdFeedId}`, {
          headers,
        })

        expect(res.status).toBe(200)
        expect(res.data).toEqual({
          id: createdFeedId,
          object: "feed",
          deleted: true,
        })

        const service: any = container.resolve(FEED_MODULE)
        const found = await service.listFeeds({ id: [createdFeedId] })
        expect(found).toHaveLength(0)
      })

      it("POST /admin/feeds/:id/launch — launch feed generation", async () => {
        const service: any = container.resolve(FEED_MODULE)
        const created = await service.createFeeds({
          title: "Feed to launch",
          file_name: "launch-test",
          is_active: true,
          schedule: 30,
          settings: {
            name: "Test Shop",
            company: "Test Company",
            url: "https://example.com",
          },
        })

        const res = await api.post(
          `/admin/feeds/${created.id}/launch`,
          {},
          { headers }
        )

        expect(res.status).toBe(200)
        expect(Array.isArray(res.data.feed)).toBe(true)
        expect(res.data.feed[0]).toMatchObject({ id: created.id })
        expect(res.data.feed[0].file_path).toBeTruthy()
        expect(res.data.feed[0].last_export_at).toBeTruthy()
      })

      it("DELETE /admin/feeds/:id/delete-file — delete feed file", async () => {
        const service: any = container.resolve(FEED_MODULE)
        const created = await service.createFeeds({
          title: "Feed for file deletion",
          file_name: "delete-file-test",
          is_active: true,
          schedule: 30,
          settings: {
            name: "Test Shop",
            company: "Test Company",
            url: "https://example.com",
          },
        })

        await api.post(`/admin/feeds/${created.id}/launch`, {}, { headers })

        const res = await api.delete(
          `/admin/feeds/${created.id}/delete-file`,
          { headers }
        )

        expect(res.status).toBe(200)
        expect(res.data).toEqual({
          id: created.id,
          object: "feed-file",
          deleted: true,
        })

        const updated = await service.retrieveFeed(created.id)
        expect(updated.file_path).toBeFalsy()
      })
    })
  },
})

jest.setTimeout(60 * 1000)
