// tslint:disable
/**
 * Car API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Car
 */
export interface Car {
    /**
     * 
     * @type {number}
     * @memberof Car
     */
    annualMaintenanceCost?: number;
    /**
     * 
     * @type {number}
     * @memberof Car
     */
    fuelConsumption?: number;
    /**
     * 
     * @type {number}
     * @memberof Car
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Car
     */
    make?: string;
    /**
     * 
     * @type {string}
     * @memberof Car
     */
    model?: string;
    /**
     * 
     * @type {number}
     * @memberof Car
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof Car
     */
    releaseYear?: number;
    /**
     * 
     * @type {string}
     * @memberof Car
     */
    version?: string;
}
/**
 * 
 * @export
 * @interface CarDTO
 */
export interface CarDTO {
    /**
     * 
     * @type {number}
     * @memberof CarDTO
     */
    annualMaintenanceCost?: number;
    /**
     * 
     * @type {number}
     * @memberof CarDTO
     */
    fuelConsumption?: number;
    /**
     * 
     * @type {string}
     * @memberof CarDTO
     */
    make?: string;
    /**
     * 
     * @type {string}
     * @memberof CarDTO
     */
    model?: string;
    /**
     * 
     * @type {number}
     * @memberof CarDTO
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof CarDTO
     */
    releaseYear?: number;
    /**
     * 
     * @type {string}
     * @memberof CarDTO
     */
    version?: string;
}
/**
 * 
 * @export
 * @interface CarFilterRequest
 */
export interface CarFilterRequest {
    /**
     * 
     * @type {string}
     * @memberof CarFilterRequest
     */
    make?: string;
    /**
     * 
     * @type {number}
     * @memberof CarFilterRequest
     */
    year?: number;
}
/**
 * 
 * @export
 * @interface CarRecommendationRequest
 */
export interface CarRecommendationRequest {
    /**
     * 
     * @type {number}
     * @memberof CarRecommendationRequest
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof CarRecommendationRequest
     */
    fuelPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CarRecommendationRequest
     */
    period?: number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CarFilterRequest} [carFilterRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsFilterPost: async (carFilterRequest?: CarFilterRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/cars/filter`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof carFilterRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(carFilterRequest !== undefined ? carFilterRequest : {}) : (carFilterRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/cars`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CarDTO} [carDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsPost: async (carDTO?: CarDTO, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/cars`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof carDTO !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(carDTO !== undefined ? carDTO : {}) : (carDTO || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CarRecommendationRequest} [carRecommendationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsRecommendPost: async (carRecommendationRequest?: CarRecommendationRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/cars/recommend`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof carRecommendationRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(carRecommendationRequest !== undefined ? carRecommendationRequest : {}) : (carRecommendationRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CarFilterRequest} [carFilterRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async carsFilterPost(carFilterRequest?: CarFilterRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).carsFilterPost(carFilterRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async carsGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Car>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).carsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CarDTO} [carDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async carsPost(carDTO?: CarDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).carsPost(carDTO, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CarRecommendationRequest} [carRecommendationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async carsRecommendPost(carRecommendationRequest?: CarRecommendationRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).carsRecommendPost(carRecommendationRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CarFilterRequest} [carFilterRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsFilterPost(carFilterRequest?: CarFilterRequest, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).carsFilterPost(carFilterRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsGet(options?: any): AxiosPromise<Array<Car>> {
            return DefaultApiFp(configuration).carsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CarDTO} [carDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsPost(carDTO?: CarDTO, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).carsPost(carDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CarRecommendationRequest} [carRecommendationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        carsRecommendPost(carRecommendationRequest?: CarRecommendationRequest, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).carsRecommendPost(carRecommendationRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {CarFilterRequest} [carFilterRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public carsFilterPost(carFilterRequest?: CarFilterRequest, options?: any) {
        return DefaultApiFp(this.configuration).carsFilterPost(carFilterRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public carsGet(options?: any) {
        return DefaultApiFp(this.configuration).carsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CarDTO} [carDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public carsPost(carDTO?: CarDTO, options?: any) {
        return DefaultApiFp(this.configuration).carsPost(carDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CarRecommendationRequest} [carRecommendationRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public carsRecommendPost(carRecommendationRequest?: CarRecommendationRequest, options?: any) {
        return DefaultApiFp(this.configuration).carsRecommendPost(carRecommendationRequest, options).then((request) => request(this.axios, this.basePath));
    }

}

