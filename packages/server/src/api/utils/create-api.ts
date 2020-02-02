import * as createIoServer from "socket.io";
import { Server } from "http";
import { api } from "app";

export type APIHandlers = { [N in keyof typeof api]: InstanceType<typeof api[N]> };

export function createAPI(server: Server, apiHandlers: APIHandlers) {
    async function apiHandler(apiInstance, { args, method }, fn) {
        return fn(await apiInstance[method](...args));
    }

    const ioServer = createIoServer(server);

    ioServer.on("connection", socket => {
        for (const [apiName, apiInstance] of Object.entries(apiHandlers)) {
            socket.on(apiName, ({ args, method }, fn) => apiHandler(apiInstance, { args, method }, fn));
        }
    });
}
