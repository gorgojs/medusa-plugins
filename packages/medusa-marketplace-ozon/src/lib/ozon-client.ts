import { Configuration, ProductAPIApi } from './ozon-seller-api';

const config = new Configuration({
  basePath: process.env.OZON_BASE_URL,
})

// TODO: find better way to pass auth
export const withAuth = <T extends object>(body: T) => ({
  clientId: process.env.OZON_CLIENT_ID!,
  apiKey: process.env.OZON_API_KEY!,
  ...body,
});

export const productApi = new ProductAPIApi(config)
