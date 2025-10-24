/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConnectionSchema = {
    providerKey?: string;
    fields?: Array<{
        /**
         * Код поля
         */
        code?: string;
        /**
         * Текстовое название переменной
         */
        name?: string;
        /**
         * Текстовое описание
         */
        description?: string;
        /**
         * Тип, который принимает поле
         */
        type?: 'bool' | 'int' | 'float' | 'string' | 'array';
        /**
         * Обязательно ли поле
         */
        required?: boolean;
        /**
         * Может ли поле принимать несколько значений
         */
        multiple?: boolean;
        /**
         * Объект с возможными значениями для поля. Если у поля type=array и multiple=false, то передавать значение не оборачивая в массив
         */
        values?: Array<{
            /**
             * Название
             */
            label?: string;
            /**
             * Значение, которое нужно передавать
             */
            value?: string;
        }>;
    }>;
};

