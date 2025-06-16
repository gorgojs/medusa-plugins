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
      it("Create feed 1", async () => {
        const input = {
          title: "Feed to create",
          file_name: "testName",
          file_path: "/exports/testName.xml",
          is_active: true,
          schedule: 30,
          settings: {
            name: "shop name",
            company: "company name",
            platform: "Medusa",
          },
        }

        const createdFeed = await service.createFeeds(input)

        expect(createdFeed).toMatchObject(input)

        const feeds = await service.listFeeds({
          id: [createdFeed.id],
        })

        expect(feeds).toHaveLength(1)
        expect(feeds[0].id).toBe(createdFeed.id)
      })
        
      it("Delete feed", async () => {
        const input = {
          title: "Feed to delete",
          file_name: "fileName",
          file_path: "/exports/fileName.xml",
          is_active: true,
          schedule: 60,
          settings: {
            name: "shop name",
            company: "company name",
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
          title: "Feed",
          file_name: "testName",
          file_path: "/exports/testName.xml",
          is_active: true,
          schedule: 30,
          settings: {
            name: "shop name",
            company: "company name",
            platform: "Medusa",
          },
        }

        const inputUpdated = {
          title: "Updated Feed",
          file_name: "Updated testName",
          file_path: "/exports/testName.xml",
          is_active: true,
          schedule: 30,
          settings: {
            name: "shop name",
            company: "company name",
            platform: "Medusa",
          },
        }

        const createdFeed = await service.createFeeds(input)
        const updateFeed = await service.updateFeeds({
            id: createdFeed.id,
            title: "Feed to update",
            file_name: "testName",
            file_path: "/exports/testName.xml",
            is_active: true,
            schedule: 60,
            settings: {
                name: "shop name",
                company: "company name",
                platform: "Medusa",
            }
        })
        expect(updateFeed).toMatchObject({
          title: "Feed to update",
          file_name: "testName",
          file_path: "/exports/testName.xml",
          is_active: true,
          schedule: 60,
          settings: {
            name: "shop name",
            company: "company name",
            platform: "Medusa",
          },
        })
      })
    })
  },
})

jest.setTimeout(60 * 1000)
