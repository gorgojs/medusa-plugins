/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type File = {
    /**
     * Файл, закодированный в base64 строку. Обязательно, если не заполнено поле url
     */
    base64?: string;
    /**
     * Ссылка на файл. Обязательно, если не заполнено поле base64
     */
    url?: string;
    /**
     * Тип файла
     */
    type?: string;
};

