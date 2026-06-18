import { moduleIntegrationTestRunner } from "@medusajs/test-utils"
import { FEED_MODULE } from "@gorgo/medusa-feed-yandex/modules/feed"
import path from "path"

const resolve = path.dirname(
  require.resolve("@gorgo/medusa-feed-yandex/modules/feed")
)

moduleIntegrationTestRunner({
  moduleName: FEED_MODULE,
  resolve,
  testSuite: ({ service }) => {
    describe("FeedModuleService", () => {
      it("Create feed", async () => {
        const input = {
          title: "Feed to create",
          file_name: "testName",
          file_path: "/exports/testName.xml",
          is_active: true,
          schedule: 30,
          settings: {
            name: "Shop name",
            company: "Company name",
            platform: "Medusa",
          },
        }
        const createdFeed = await service.createFeeds(input)
        const feeds = await service.listFeeds({
          id: [createdFeed.id],
        })

        expect(createdFeed).toMatchObject(input)
        expect(feeds).toHaveLength(1)
        expect(feeds[0].id).toBe(createdFeed.id)
      })

      it("Delete feed", async () => {
        const input = {
          title: "Feed to delete",
          file_name: "testName.xml",
          file_path: "/exports/testName.xml",
          is_active: true,
          schedule: 30,
          settings: {
            name: "Shop name",
            company: "Company name",
            platform: "Medusa",
          },
        }
        const createdFeed = await service.createFeeds(input)
        await service.deleteFeeds(createdFeed.id)
        const feeds = await service.listFeeds({ id: [createdFeed.id] })

        expect(feeds).toHaveLength(0)
      })

      it("Retrieve feed", async () => {
        const input = {
          title: "Feed to retrieve",
          file_name: "retrieve-test.xml",
          is_active: true,
          schedule: 30,
        }
        const createdFeed = await service.createFeeds(input)
        const retrieved = await service.retrieveFeed(createdFeed.id)

        expect(retrieved.id).toBe(createdFeed.id)
        expect(retrieved).toMatchObject(input)
      })

      it("Update feed", async () => {
        const input = {
          title: "Feed to update",
          file_name: "testName.xml",
          file_path: "/exports/testName.xml",
          is_active: true,
          schedule: 30,
          settings: {
            name: "Shop name",
            company: "Company name",
            platform: "Medusa",
          },
        }
        const createdFeed = await service.createFeeds(input)
        const inputUpdated = {
          id: createdFeed.id,
          title: "Updated Feed to update",
          file_name: "updatedTestName.xml",
          file_path: "/exports/updatedTestName.xml",
          is_active: false,
          schedule: 60,
          settings: {
            name: "Updated Shop name",
            company: "Updated Company name",
            platform: "Updated Medusa",
          },
        }
        const updateFeed = await service.updateFeeds([inputUpdated])

        expect(updateFeed[0]).toMatchObject(inputUpdated)
      })
    })
  },
})

jest.setTimeout(60 * 1000)
