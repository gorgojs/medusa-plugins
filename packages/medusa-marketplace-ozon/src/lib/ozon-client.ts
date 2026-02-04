import { MarketplaceOzonCredentialsType } from '../providers/marketplace-ozon/types';
import { Configuration, ProductAPIApi, CategoryAPIApi } from './ozon-seller-api';

const BASE_URL="https://api-seller.ozon.ru"

const config = new Configuration({
  basePath: BASE_URL
})

// TODO: find better way to pass auth
export const withAuth = <T extends object>(credentials: MarketplaceOzonCredentialsType, body: T) => ({
  apiKey: credentials.apiKey,
  clientId: credentials.clientId,
  ...body,
});

export const productApi = new ProductAPIApi(config)
export const categoryApi = new CategoryAPIApi(config)
