/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CalculatorDirection = {
    /**
     * Код страны в соответствии с ISO 3166-1 alpha-2
     */
    countryCode: string;
    /**
     * Почтовый индекс
     */
    index?: string;
    /**
     * Полный почтовый адрес. Если заполнен, то считается приоритетным, если не указан cityGuid. <br /> *Обязателен, если не указаны cityGuid или city.
     */
    addressString: string;
    /**
     * Регион/Край/Область
     */
    region?: string;
    /**
     * Название города (обязательно если не заполнен cityGuid). <br /> *Обязателен, если не указаны cityGuid или addressString.
     */
    city: string;
    /**
     * ФИАС код города\поселения в базе fias.nalog.ru (обязательно, если не заполнен city). <br /> *Обязателен, если не указаны city или addressString.
     */
    cityGuid: string;
    /**
     * Широта. Обязательно указывайте, если это доставка через такси, например, Яндекс.Доставка и д.р.
     */
    lat?: number;
    /**
     * Долгота. Обязательно указывайте, если это доставка через такси, например, Яндекс.Доставка и д.р.
     */
    lng?: number;
};

