/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connection } from '../models/Connection';
import type { ListConnectionResponse } from '../models/ListConnectionResponse';
import type { SchemasConnectionResponse } from '../models/SchemasConnectionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConnectionsService {
    /**
     * Получение списка подключений пользователя
     * Возвращает постраничный список подключений пользователя
     * @param offset Minimum - 0, Maximum - 5000
     * @param limit Minimum - 1, Maximum - 100
     * @param filter JSON-фильтр. Фильтрация по полям объектов. Например, чтобы отфильтровать по пользователю, нужно передать filter={"userId":"123","providerKey":"cdek"}
     * @returns ListConnectionResponse ok
     * @throws ApiError
     */
    public static getListConnections(
        offset?: number,
        limit: number = 10,
        filter: string = '{}',
    ): CancelablePromise<ListConnectionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connections',
            query: {
                'offset': offset,
                'limit': limit,
                'filter': filter,
            },
        });
    }
    /**
     * Создание подключения к службе доставки
     * Проверяет авторизационные данные к системе службы доставки и создает подключение.
     * @param requestBody
     * @returns Connection ok
     * @throws ApiError
     */
    public static createConnection(
        requestBody?: Connection,
    ): CancelablePromise<Connection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Получение подключения службы доставки
     * Возвращает подключение службы доставки.
     * @param id
     * @returns Connection ok
     * @throws ApiError
     */
    public static getConnection(
        id: string,
    ): CancelablePromise<Connection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connections/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Обновление подключения службы доставки
     * Обновляет подключение к службе доставки. При обновлении проверяет авторизационные данные в API службы доставки.
     * @param id
     * @param requestBody
     * @returns Connection ok
     * @throws ApiError
     */
    public static readConnection(
        id: string,
        requestBody: Connection,
    ): CancelablePromise<Connection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/connections/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Удаление подключения службы доставки
     * Подключение помечается удаленным. Можно будет восстановить через службу поддержки.
     * @param id
     * @returns any ok
     * @throws ApiError
     */
    public static deleteConnection(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/connections/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Получение схемы подключений служб доставки
     * Возвращает набор полей каждой службы доставки, которые возможно заполнить для создания\обновления подключения (connectParams)
     *
     * Метод возвращает схему подключения к службе доставки. Обычно используется для отрисовки формы создания подключения на стороне маркетплейса / модуля / агрегатора. Т.е. метод необходим если вам нужно дать возможность своим пользователям создавать подключения, иначе лучше это делать через наш личный кабинет.
     *
     * Массив fields - это список полей connectParams в методе [createConnection](#/connections/createConnection)
     *
     * * *code* - это название поля в json
     * * *type* - это тип значения
     * * *values* - это массив с возможными значениями для поля.
     * * *multiple* - поле может принимать несколько значений, т.е. значение поля является массивом.
     * * *required* - поле обязательно для передачи
     *
     * Сценарий:
     * 1. Получаете схемы всех служб.
     * 2. По схеме отрисовываете форму для нужной службы доставки.
     * 3. Формируете connectParams собранный из этой формы.
     * 4. Создаете подключение.
     *
     * Пример:
     * 1. Получили схему Деливери.Клаб
     * ```json
     * {
         * "providerKey": "d-club",
         * "fields": [
             * {
                 * "code": "login",
                 * "name": "Логин",
                 * "description": "Логин",
                 * "type": "string",
                 * "required": true,
                 * "multiple": false,
                 * "values": []
                 * },
                 * {
                     * "code": "password",
                     * "name": "Пароль",
                     * "description": "Пароль",
                     * "type": "string",
                     * "required": true,
                     * "multiple": false,
                     * "values": []
                     * }
                     * ]
                     * }
                     * ```
                     * 2. Создаем [подключение](#/connections/createConnection) на основе схемы. Схема это набор полей в параметре connectParams:
                     * ```json
                     * "connectParams": {
                         * "login": "mylogin",
                         * "password": "mypassword"
                         * }
                         * ```
                         * 3. В итоге получаем такую структуру для создания подключения:
                         * ```json
                         * {
                             * "name": "Основное подключение к службе доставки",
                             * "providerKey": "d-club",
                             * "insuranceRate": 0,
                             * "cashServiceRate": 0,
                             * "connectParams": {
                                 * "login": "mylogin",
                                 * "password": "mypassword"
                                 * },
                                 * "isUseBaseConnect": 0
                                 * }
                                 * ```
                                 *
                                 * @param offset Minimum - 0, Maximum - 5000
                                 * @param limit Minimum - 1, Maximum - 100
                                 * @param providerKey Фильтрации схемы по службе доставки
                                 * @returns SchemasConnectionResponse ok
                                 * @throws ApiError
                                 */
                                public static readSchemasConnection(
                                    offset?: number,
                                    limit: number = 10,
                                    providerKey?: string,
                                ): CancelablePromise<SchemasConnectionResponse> {
                                    return __request(OpenAPI, {
                                        method: 'GET',
                                        url: '/connections/schemas',
                                        query: {
                                            'offset': offset,
                                            'limit': limit,
                                            'providerKey': providerKey,
                                        },
                                    });
                                }
                            }
