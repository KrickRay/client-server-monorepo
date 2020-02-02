import * as path from "path";
import { createConnection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { postgres } from "../../config.json";

export async function connectDB(options: Omit<PostgresConnectionOptions, "type"> = {}) {
    const connection = await createConnection({
        type: "postgres",
        ...options,
        entities: [path.join(__dirname, "entity/**/*.{t,j}s")]
    });
    console.log("Postgres connected");
    return connection;
}

export const connection = connectDB(postgres);
