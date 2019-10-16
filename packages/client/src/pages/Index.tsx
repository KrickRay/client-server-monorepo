import React from "react";

import { api } from "../api";
import { useStores } from "../stores";

api.getUsers().then(console.log);

export const Index: React.FC = () => {
    const {} = useStores();

    return (
        <>
            <h1>Base</h1>
        </>
    );
};
