/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculatorToDoorResult } from './CalculatorToDoorResult';
export type CalculatorToPointResult = (CalculatorToDoorResult & {
    tariffs?: Array<{
        deliveryTypes?: any;
        /**
         * Массив ID доступных ПВЗ для каждого из тарифов
         */
        pointIds?: Array<number>;
    }>;
});

