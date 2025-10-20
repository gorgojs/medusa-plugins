import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from '@medusajs/framework/workflows-sdk';
import { MARKETPLACE_YANDEX_MARKET_MODULE } from '../modules/marketplace-yandex-market';
import MarketplaceYandexMarketModuleService from '../modules/marketplace-yandex-market/service';

import { Configuration, CampaignsApi } from '../../yandex-market-client';

export type GetCampaignsListInput = {
  api_key: string;
};

export const getCampaignsListStep = createStep(
  'get-campaigns-list',
  
  async (input: GetCampaignsListInput) => {
    console.log("_______getCampaignsList__________");
    console.log(input);
    console.log("_______getCampaignsList__________");
    const config = new Configuration({
      apiKey: input.api_key,
    });
    const api = new CampaignsApi(config);
    const response = await api.getCampaigns();
    const campaignsList = response.data.campaigns;
    const businesses = campaignsList.map(campaign => ({
      id: String(campaign.business?.id!),
      name: campaign.business?.name!,
      api_key: input.api_key,
    }));
    const campaigns = campaignsList.map(campaign => ({
      domain: campaign.domain!,
      id: String(campaign.id!),
      client_id: campaign.clientId!,
      yandex_market_business_id: String(campaign.business!.id),
      placement_type: campaign.placementType!,
    }));
    return new StepResponse({campaigns, businesses});
  },
);

export type AddCampaignsStepInput = {
  campaigns: {
    domain: string;
    id: string;
    client_id: number;
    yandex_market_business_id: string;
    placement_type: string;
  }[];
  businesses: {
    id: string;
    name: string;
    api_key: string;
  }[];
};

export const addCampaignsStep = createStep(
  'add-campaigns-step',
  async (input: AddCampaignsStepInput, { container }) => {
    console.log("________addCampaignsStep_________");
    console.log(input);
    console.log("________addCampaignsStep_________");
    const marketplaceYandexMarketModuleService: MarketplaceYandexMarketModuleService = 
      container.resolve(MARKETPLACE_YANDEX_MARKET_MODULE);
    const businesses = await marketplaceYandexMarketModuleService.createYandexMarketBusinesses(input.businesses);
    const campaigns = await marketplaceYandexMarketModuleService.createYandexMarketCampaigns(input.campaigns);
    return new StepResponse({businesses, campaigns}, input.businesses.map(business => business.id));
  },
  async (input: string[], { container }) => {
    const marketplaceYandexMarketModuleService: MarketplaceYandexMarketModuleService = 
      container.resolve(MARKETPLACE_YANDEX_MARKET_MODULE);
    await marketplaceYandexMarketModuleService.deleteYandexMarketBusinesses(input);
  }
);

export type AddCampaignsWorkflowInput = {
  api_key: string;
};

export const addCampaignsWorkflow = createWorkflow(
  'add-campaigns-workflow',
  (input: AddCampaignsWorkflowInput) => {
    const campaignsList = getCampaignsListStep(input);
    const campaigns = addCampaignsStep(campaignsList)
    return new WorkflowResponse(campaigns);
  }
);
  