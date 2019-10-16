import * as createIoServer from "socket.io";

import { API } from "./api";

export function createAPI(server) {
    const ioServer = createIoServer(server);

    ioServer.on("connection", socket => {
        const api = new API();
        for (const [name, func] of Object.entries(api)) {
            socket.on(name, async (args, fn) => {
                fn(await func(args));
            });
        }
    });
}
