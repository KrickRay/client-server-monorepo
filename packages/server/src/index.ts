import * as express from "express";
import { createServer } from "http";

import { server as config } from "../config.json";
import { createAPI, apiHandlers } from "./api";

const app = express();
const server = createServer(app);

createAPI(server, apiHandlers);

server.listen(config.port, config.host, () => {
    console.log(`Server: ${config.protocol}//${config.host}:${config.port}`);
});
