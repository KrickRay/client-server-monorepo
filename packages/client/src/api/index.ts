import { APID } from "app";
import createIOClient from "socket.io-client";

export class API extends APID {
    io = createIOClient("http://localhost:8000");

    constructor() {
        super();
        for (let actionName of Object.keys(new APID())) {
            (this as any)[actionName] = async data => {
                return await api.request(actionName, data);
            };
        }
    }

    async request<T, R>(name: string, data?: T) {
        return await new Promise((res, rej) =>
            this.io.emit(name, data, (result: R) => {
                res(result);
            })
        );
    }
}

export const api = new API();
