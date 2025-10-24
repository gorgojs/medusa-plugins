/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type B2cplCityObject = {
    id?: number;
    /**
     * Регион/область
     */
    region?: string;
    /**
     * Населенный пункт
     */
    residence?: string;
    /**
     * Начало диапазона почтовых индексов
     */
    zipFirst?: string;
    /**
     * Конец диапазона почтовых индексов
     */
    zipLast?: string;
    /**
     * Длительность магистральной перевозки между Москвой и городом получателем в рабочих днях
     */
    transportDays?: number;
    /**
     * Возможность курьерской доставки в этом диапазоне
     */
    flagCourier?: string;
    /**
     * Возможность ПВЗ доставки в этом диапазоне
     */
    flagPvz?: string;
    /**
     * Возможность доставки авиа. 0 – нет авиа доставки, 1 – только авиа доставка, 2 – возможна как наземная, так и авиа доставки
     */
    flagAvia?: string;
    /**
     * ФИАС для города/села/поселка
     */
    cityGuid?: string;
};

