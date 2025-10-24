/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalServiceObject } from '../models/AdditionalServiceObject';
import type { B2cplCityObject } from '../models/B2cplCityObject';
import type { BoxberryCityObject } from '../models/BoxberryCityObject';
import type { CdekCityObject } from '../models/CdekCityObject';
import type { DeliveryType } from '../models/DeliveryType';
import type { DpdCityObject } from '../models/DpdCityObject';
import type { PaginationMeta } from '../models/PaginationMeta';
import type { Params } from '../models/Params';
import type { PaymentMethod } from '../models/PaymentMethod';
import type { PickupType } from '../models/PickupType';
import type { PointObject } from '../models/PointObject';
import type { PointOperation } from '../models/PointOperation';
import type { PointType } from '../models/PointType';
import type { ProviderObject } from '../models/ProviderObject';
import type { ProviderStatus } from '../models/ProviderStatus';
import type { StatusObject } from '../models/StatusObject';
import type { TariffObject } from '../models/TariffObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListsService {
    /**
     * Получение списка статусов
     * Получение списка статусов
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям key, name
     * @param fields перечень отдаваемых полей, если не указан, отдаются все поля
     * @returns any ok
     * @throws ApiError
     */
    public static getListStatuses(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
    ): CancelablePromise<{
        rows?: Array<StatusObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/statuses',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
            },
        });
    }
    /**
     * Список соответствия статусов СД со статусами сервиса
     * Получение списка соответствия статусов
     * @param limit
     * @param offset
     * @param providerKey
     * @returns any ok
     * @throws ApiError
     */
    public static getListProviderStatuses(
        limit: number = 100,
        offset?: number,
        providerKey: string = '',
    ): CancelablePromise<{
        rows?: Array<ProviderStatus>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providerStatuses',
            query: {
                'limit': limit,
                'offset': offset,
                'providerKey': providerKey,
            },
        });
    }
    /**
     * Получение списка поставщиков услуг
     * Получение списка поставщиков услуг
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям key, name
     * @param fields перечень отдаваемых полей, если не указан, отдаются все поля
     * @returns any ok
     * @throws ApiError
     */
    public static getListProviders(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
    ): CancelablePromise<{
        rows?: Array<ProviderObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providers',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
            },
        });
    }
    /**
     * Получение списка дополнительных услуг
     * Получение списка дополнительных услуг
     * @param providerKey Фильтр услуг по провайдеру
     * @returns AdditionalServiceObject ok
     * @throws ApiError
     */
    public static getListServices(
        providerKey?: string,
    ): CancelablePromise<Array<AdditionalServiceObject>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/services',
            query: {
                'providerKey': providerKey,
            },
        });
    }
    /**
     * @deprecated
     * Получение возможных параметров для подключения к службе доставки
     * Получение возможных параметров для подключения к службе доставки
     *
     *
     * [НОВЫЙ МЕТОД](#/connections/readSchemasConnection)
     *
     * @param providerKey Ключ провайдера (службы доставки)
     * @returns any ok
     * @throws ApiError
     */
    public static getProvidersParams(
        providerKey: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providers/{providerKey}/params',
            path: {
                'providerKey': providerKey,
            },
        });
    }
    /**
     * Получение списка пунктов приема/выдачи
     * Получение списка пунктов приема/выдачи
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям: id, providerKey, code, codeOriginal, name, postIndex, lat, lng, countryCode, region, regionType, city, cityGuid, cityType, community, communityGuid, communityType, area, street, streetType, house, block, office, address, url, email, phone, availableOperation, type, cod, paymentCash, paymentCard, multiplaceDeliveryAllowed, fittingRoom. Например: city=Москва;providerKey=cdek;availableOperation=[2,3].
     * Документация работы фильтра: https://docs.apiship.ru/docs/api/query-filter/
     * Поиск по полям city/cityGuid или community/communityGuid ищет сразу и по city/cityGuid и по community/communityGuid
     * @param fields перечень отдаваемых полей, если не указан, отдаются все поля
     * @param stateCheckOff Если stateCheckOff=1 отдаются также ПВЗ у которых указан не точный адрес расположения
     * @param enabledCheckOff Если enabledCheckOff=1 Если enabledCheckOff=1 и передан code в поле filter - отдаются также отключенные ПВЗ
     * @returns any ok
     * @throws ApiError
     */
    public static getListPoints(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
        stateCheckOff?: boolean,
        enabledCheckOff?: boolean,
    ): CancelablePromise<{
        rows?: Array<PointObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/points',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
                'stateCheckOff': stateCheckOff,
                'enabledCheckOff': enabledCheckOff,
            },
        });
    }
    /**
     * Получение списка актуальных тарифов
     * Получение списка актуальных тарифов
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям id, providerKey, name
     * @param fields перечень отдаваемых полей, если не указан, отдаются все поля
     * @returns any ok
     * @throws ApiError
     */
    public static getListTariffs(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
    ): CancelablePromise<{
        rows?: Array<TariffObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/tariffs',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
            },
        });
    }
    /**
     * Получение списка типов приема
     * Получение списка типов приема
     * @returns PickupType ok
     * @throws ApiError
     */
    public static getListPickupTypes(): CancelablePromise<Array<PickupType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/pickupTypes',
        });
    }
    /**
     * Получение списка типов доставки
     * Получение списка типов доставки
     * @returns DeliveryType ok
     * @throws ApiError
     */
    public static getListDeliveryTypes(): CancelablePromise<Array<DeliveryType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/deliveryTypes',
        });
    }
    /**
     * Получение списка способов оплаты
     * Получение списка способов оплаты
     * @returns PaymentMethod ok
     * @throws ApiError
     */
    public static getListPaymentMethods(): CancelablePromise<Array<PaymentMethod>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/paymentMethods',
        });
    }
    /**
     * Получение списка типов операций для точек приема/выдачи товаров
     * Получение списка типов операций для точек приема/выдачи товаров
     * @returns PointOperation ok
     * @throws ApiError
     */
    public static getPointOperationTypes(): CancelablePromise<Array<PointOperation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/operationTypes',
        });
    }
    /**
     * Получение списка типов точек приема/выдачи товаров
     * Получение списка типов точек приема/выдачи товаров
     * @returns PointType ok
     * @throws ApiError
     */
    public static getPointTypes(): CancelablePromise<Array<PointType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/pointTypes',
        });
    }
    /**
     * Получение списка городов b2cpl
     * Получение списка городов b2cpl
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям id, region, residence, zipFirst, zipLast, transportDays, flagCourier, flagPvz, flagAvia, cityGuid
     * @param fields Перечень отдаваемых полей, если не указан, отдаются все поля
     * @returns any ok
     * @throws ApiError
     */
    public static getListCitiesB2Cpl(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
    ): CancelablePromise<{
        rows?: Array<B2cplCityObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providerCities/b2cpl',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
            },
        });
    }
    /**
     * Получение списка городов boxberry
     * Получение списка городов boxberry
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям id, cityGuid, region, district, cityGuid, courierZips
     * @param fields Перечень отдаваемых полей, если не указан, отдаются все поля
     * @returns any ok
     * @throws ApiError
     */
    public static getListCitiesBoxberry(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
    ): CancelablePromise<{
        rows?: Array<BoxberryCityObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providerCities/boxberry',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
            },
        });
    }
    /**
     * Получение списка городов dpd
     * Получение списка городов dpd
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям id, dpdCityId, cityCode, cityGuid, cityName, countryCode, countryName, regionCode, regionName, abbreviation, isCodCost
     * @param fields Перечень отдаваемых полей, если не указан, отдаются все поля
     * @returns any ok
     * @throws ApiError
     */
    public static getListCitiesDpd(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
    ): CancelablePromise<{
        rows?: Array<DpdCityObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providerCities/dpd',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
            },
        });
    }
    /**
     * Получение списка городов cdek
     * Получение списка городов cdek
     * @param limit
     * @param offset
     * @param filter Возможна фильтрация по полям fiasGuid, cityUuid, cdekId, cityName, oblName, countryCode, codCostLimit
     * @param fields Перечень отдаваемых полей, если не указан, отдаются все поля
     * @returns any ok
     * @throws ApiError
     */
    public static getListCitiesCdek(
        limit?: number,
        offset?: number,
        filter?: string,
        fields?: string,
    ): CancelablePromise<{
        rows?: Array<CdekCityObject>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providerCities/cdek',
            query: {
                'limit': limit,
                'offset': offset,
                'filter': filter,
                'fields': fields,
            },
        });
    }
    /**
     * @deprecated
     * Получение всех параметров подключения к службам доставки
     * Получение всех параметров подключения к службам доставки
     * @param limit Лимит выборки
     * @param offset Смещение выборки
     * @param _with Список связанных данных, которые возвращаются в ответе. Возможные значения - company
     * @returns any ok
     * @throws ApiError
     */
    public static getAllParams(
        limit?: number,
        offset?: number,
        _with?: string,
    ): CancelablePromise<{
        /**
         * Массив параметров
         */
        rows?: Array<Params>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providers/connections',
            query: {
                'limit': limit,
                'offset': offset,
                'with': _with,
            },
        });
    }
    /**
     * @deprecated
     * Получение параметров подключения по ID
     * Получение параметров подключения по ID
     * @param id ID параметров подключения
     * @param _with Список связанных данных, которые возвращаются в ответе. Возможные значения - company
     * @returns Params ok
     * @throws ApiError
     */
    public static getOneParams(
        id: number,
        _with?: string,
    ): CancelablePromise<Params> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/providers/connections/{id}',
            path: {
                'id': id,
            },
            query: {
                'with': _with,
            },
        });
    }
}
