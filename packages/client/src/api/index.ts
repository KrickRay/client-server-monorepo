import { api } from "app";
import createIOClient from "socket.io-client";
import { createAllAPI } from "./utils";

export const io = createIOClient("http://localhost:3000");

export const { userAPI } = createAllAPI(io, api);
