/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { SignupUserRequest } from '../models/SignupUserRequest';
import type { UserResponse } from '../models/UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Авторизация пользователя. Получение токена к API
     * Авторизует пользователя и выдает ему токен для доступа к API
     * @param requestBody Объект типа LoginRequest
     * @returns LoginResponse ok
     * @throws ApiError
     */
    public static loginUser(
        requestBody: LoginRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Регистрация пользователя
     * Регистрирует пользователя в системе. Для завершения регистрации на email придет письмо с подтверждением.
     * @param requestBody
     * @returns UserResponse ok
     * @throws ApiError
     */
    public static signupUser(
        requestBody?: SignupUserRequest,
    ): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Авторегистрация пользователя
     * Автоматически регистрирует пользователя в системе без подтверждения регистрации через email. Для работы метода необходимо получить специальные права доступа в службе поддержки.
     * @param requestBody
     * @returns UserResponse ok
     * @throws ApiError
     */
    public static autoSignupUser(
        requestBody?: SignupUserRequest,
    ): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/autosignup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
