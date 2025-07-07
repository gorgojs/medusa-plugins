import { moduleIntegrationTestRunner } from "@medusajs/test-utils"
import { FEED_MODULE } from ".."
import FeedModuleService from "../service"
import Feed from "../models/feed"
import path from "path"

moduleIntegrationTestRunner<FeedModuleService>({
  moduleName: FEED_MODULE,
  moduleModels: [Feed],
  resolve: path.join(__dirname, "../"),
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

      it("Upadate feed", async () => {
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
        const updateFeed = await service.updateFeeds(inputUpdated)

        expect(updateFeed[0]).toMatchObject(inputUpdated)
      })
    })
  },
})

jest.setTimeout(60 * 1000)
