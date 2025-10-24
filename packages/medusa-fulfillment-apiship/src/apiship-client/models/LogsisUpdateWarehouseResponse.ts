/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LogsisUpdateWarehouseResponse = {
    /**
     * Статус
     */
    status?: string;
    response?: Array<{
        id?: string;
        code?: string;
        name?: string;
        working_hours?: string;
        is_returns_possible?: boolean;
        is_visible?: boolean;
        contact_name?: string;
        contact_phone?: string;
        address?: string;
        comment?: string;
    }>;
};

