import { Configuration, BusinessOfferMappingsApi, ContentApi, WarehousesApi, FbsApi, CampaignsApi, DbsApi } from "./yandex-market-client"
import { IntegrationYandexMarketCredentialsType } from "../providers/integration-yandex-market/types/integration"

function assertValidCredentials(credentials: IntegrationYandexMarketCredentialsType) {
  if (!credentials.api_key) {
    throw new Error("Yandex Market credentials are missing api_key")
  }
  const business_id = Number(credentials.business_id)
  if (!Number.isFinite(business_id)) {
    throw new Error("Yandex Market credentials are missing a valid business_id")
  }
  const campaign_id = Number(credentials.campaign_id)
  if (!Number.isFinite(campaign_id)) {
    throw new Error("Yandex Market credentials are missing a valid campaign_id")
  }
  return { api_key: credentials.api_key, business_id, campaign_id }
}

export const withBusinessId = <T extends object>(credentials: IntegrationYandexMarketCredentialsType, body: T) => {
  const { api_key, business_id } = assertValidCredentials(credentials)
  return {
    apiKey: api_key,
    businessId: business_id,
    ...body,
  }
}

export function businessOfferMappingsApi(credentials: IntegrationYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new BusinessOfferMappingsApi(new Configuration({ apiKey: api_key }))
}

export function contentApi(credentials: IntegrationYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new ContentApi(new Configuration({ apiKey: api_key }))
}


export function warehousesApi(credentials: IntegrationYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new WarehousesApi(new Configuration({ apiKey: api_key }))
}

export function dbsApi(credentials: IntegrationYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new DbsApi(new Configuration({ apiKey: api_key }))
}

export function campaignApi(credentials: IntegrationYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new CampaignsApi(new Configuration({ apiKey: api_key }))
}

export function DbsApiAxiosParamCreator(credentials: IntegrationYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new CampaignsApi(new Configuration({ apiKey: api_key }))
}