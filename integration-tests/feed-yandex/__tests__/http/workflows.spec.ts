import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import { createFeedsWorkflow } from "@gorgo/medusa-feed-yandex/workflows/create-feeds"
import { deleteFeedsWorkflow } from "@gorgo/medusa-feed-yandex/workflows/delete-feeds"
import { updateFeedsWorkflow } from "@gorgo/medusa-feed-yandex/workflows/update-feeds"
import { deleteFeedFilesWorkflow } from "@gorgo/medusa-feed-yandex/workflows/delete-feed-files"
import { runFeedsWorkflow } from "@gorgo/medusa-feed-yandex/workflows/run-feeds"
import { FEED_MODULE } from "@gorgo/medusa-feed-yandex/modules/feed"

medusaIntegrationTestRunner({
  testSuite: ({ getContainer }) => {
    describe("createFeedsWorkflow", () => {
      it("creates feeds and persists them", async () => {
        const container = getContainer()

        const input = [
          { file_name: "feed1.xml", is_active: true, schedule: 60 },
          { file_name: "feed2.xml", is_active: false, schedule: 120 },
        ]

        const { result } = await createFeedsWorkflow(container).run({ input })

        expect(result).toHaveLength(2)
        expect(result[0]).toHaveProperty("file_name", "feed1.xml")
        expect(result[1]).toHaveProperty("file_name", "feed2.xml")

        const service: any = container.resolve(FEED_MODULE)
        const feeds = await service.listFeeds({
          file_name: ["feed1.xml", "feed2.xml"],
        })
        expect(feeds).toHaveLength(2)
      })
    })

    describe("updateFeedsWorkflow", () => {
      it("updates feed title and schedule", async () => {
        const container = getContainer()
        const service: any = container.resolve(FEED_MODULE)

        const created = await service.createFeeds({
          file_name: "original.xml",
          is_active: true,
          schedule: 30,
        })

        await updateFeedsWorkflow(container).run({
          input: [{ id: created.id, title: "updated feed name", schedule: 60 }],
        })

        const updated = await service.retrieveFeed(created.id)
        expect(updated.title).toBe("updated feed name")
        expect(updated.schedule).toBe(60)
      })
    })

    describe("deleteFeedsWorkflow", () => {
      it("soft-deletes feeds", async () => {
        const container = getContainer()
        const service: any = container.resolve(FEED_MODULE)

        const created = await service.createFeeds({
          file_name: "todelete.xml",
          is_active: true,
          schedule: 30,
        })

        await deleteFeedsWorkflow(container).run({
          input: { ids: [created.id] },
        })

        const found = await service.listFeeds({ id: [created.id] })
        expect(found).toHaveLength(0)
      })
    })

    describe("deleteFeedFilesWorkflow", () => {
      it("clears file_path on feed with no existing file", async () => {
        const container = getContainer()
        const service: any = container.resolve(FEED_MODULE)

        const created = await service.createFeeds({
          file_name: "no-file-feed.xml",
          is_active: true,
          schedule: 30,
        })

        const { result } = await deleteFeedFilesWorkflow(container).run({
          input: { ids: [created.id] },
        })

        expect(result).toContain(created.id)

        const updated = await service.retrieveFeed(created.id)
        expect(updated.file_path).toBeFalsy()
      })
    })

    describe("runFeedsWorkflow", () => {
      it("generates feed file and updates file_path and last_export_at", async () => {
        const container = getContainer()
        const service: any = container.resolve(FEED_MODULE)

        const created = await service.createFeeds({
          file_name: "run-feeds-test",
          is_active: true,
          schedule: 30,
          settings: {
            name: "Test Shop",
            company: "Test Company",
            url: "https://example.com",
          },
        })

        const { result } = await runFeedsWorkflow(container).run({
          input: { ids: [created.id] },
        })

        expect(Array.isArray(result)).toBe(true)
        expect(result[0]).toMatchObject({ id: created.id })
        expect(result[0].file_path).toBeTruthy()
        expect(result[0].last_export_at).toBeTruthy()
      })
    })
  },
})

jest.setTimeout(60 * 1000)
