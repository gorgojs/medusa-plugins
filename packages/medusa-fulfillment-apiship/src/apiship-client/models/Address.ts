/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Address = {
    /**
     * Код страны в соответствии с ISO 3166-1 alpha-2
     */
    countryCode?: string;
    /**
     * Почтовый индекс
     */
    postIndex?: string;
    /**
     * Область или республика или край
     */
    region?: string;
    /**
     * Район
     */
    area?: string;
    /**
     * Город или населенный пункт
     */
    city?: string;
    /**
     * ID города в базе ФИАС
     */
    cityGuid?: string;
    /**
     * Населённый пункт
     */
    community?: string | null;
    /**
     * ID населённого пункта в базе ФИАС
     */
    communityGuid?: string | null;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/Корпус
     */
    block?: string;
    /**
     * Офис/Квартира
     */
    office?: string;
    /**
     * Широта
     */
    lat?: number;
    /**
     * Долгота
     */
    lng?: number;
    /**
     * Полный адрес одной строкой. При заполнении этого поля остальные можно не заполнять, кроме countryCode
     */
    addressString?: string;
};

