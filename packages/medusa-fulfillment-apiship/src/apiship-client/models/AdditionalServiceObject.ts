/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AdditionalServiceObject = {
    /**
     * Идентификатор службы доставки
     */
    providerKey?: string;
    /**
     * Название услуги
     */
    name?: string;
    /**
     * Ключ в extraParams
     */
    extraParamName?: string;
    /**
     * Тип значения для extraParams:
     * * `bool` - булев тип значения, принимает *true, false, 0, 1*
     * * `string` - строковый тип значения, принимает *"", "qwerty123"*
     * * `int` - целочисленный тип значения, принимает *1, 2, 3, 4, 5, 6*
     * * `float` - число с плавающей точкой, принимает *999.123, 6343.7898*
     *
     */
    valueType?: AdditionalServiceObject.valueType;
    /**
     * Описание типа значения для extraParams
     */
    valueDescription?: string;
    /**
     * Описание услуги
     */
    description?: string;
};
export namespace AdditionalServiceObject {
    /**
     * Тип значения для extraParams:
     * * `bool` - булев тип значения, принимает *true, false, 0, 1*
     * * `string` - строковый тип значения, принимает *"", "qwerty123"*
     * * `int` - целочисленный тип значения, принимает *1, 2, 3, 4, 5, 6*
     * * `float` - число с плавающей точкой, принимает *999.123, 6343.7898*
     *
     */
    export enum valueType {
        BOOL = 'bool',
        STRING = 'string',
        INT = 'int',
        FLOAT = 'float',
    }
}

