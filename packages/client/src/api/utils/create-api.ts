/* eslint-disable @typescript-eslint/no-explicit-any */
import { getKeys } from "app";

function request<T, R>(io: SocketIOClient.Socket, apiName: string, method: string, args?: T): Promise<R> {
    return new Promise(res => {
        io.emit(apiName, { method, args }, (result: R) => {
            res(result);
        });
    });
}

export function createAPI<T extends { new () }>(
    io: SocketIOClient.Socket,
    apiName: string,
    APIClass: T
): InstanceType<T> {
    const apiMethods = getKeys(APIClass);
    return apiMethods.reduce((api, method: string) => {
        api[method] = (...args) => request(io, apiName, method, args);
        return api;
    }, {} as any);
}

export function createAllAPI<T extends { [N: string]: { new () } }>(
    io: SocketIOClient.Socket,
    APIClasses: T
): { [N in keyof T]: InstanceType<T[N]> } {
    return Object.entries(APIClasses).reduce((allAPI, [apiName, APIClass]) => {
        allAPI[apiName] = createAPI(io, apiName, APIClass);
        return allAPI;
    }, {} as any);
}
