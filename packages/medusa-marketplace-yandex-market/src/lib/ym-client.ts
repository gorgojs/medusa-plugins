import { Configuration, BusinessOfferMappingsApi, ContentApi } from './yandex-market-client';

// TODO validate that YM_API_KEY and YM_BUSINESS_ID are set

export const config = new Configuration({
    apiKey: process.env.YM_API_KEY as string,
})

export const withBusinessId = <T extends object>(body: T) => ({
  businessId: process.env.YM_BUSINESS_ID as unknown as number,
  ...body,
});

export const businessOfferMappingsApi = new BusinessOfferMappingsApi(config)

export const contentApi = new ContentApi(config)

