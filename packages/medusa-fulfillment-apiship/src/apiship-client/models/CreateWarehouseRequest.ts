/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkingTime } from './WorkingTime';
import type { X5Warehouse } from './X5Warehouse';
export type CreateWarehouseRequest = {
    /**
     * ID подключения к 5Пост (если не указано, создается по самому первому созданному подключению)
     */
    providerConnectId?: string;
    /**
     * Код региона, в котором находится склад
     */
    regionCode: string;
    /**
     * Наименование федерального округа
     */
    federalDistrict: string;
    warehouse: X5Warehouse;
    workingTime: Array<WorkingTime>;
    /**
     * Часовой пояс склада
     */
    timezone: string;
};

