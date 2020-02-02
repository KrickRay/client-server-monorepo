import React from "react";

import { useStores } from "../stores";
import { observer } from "mobx-react";

export const Index = observer(() => {
    const { userStore } = useStores();

    return (
        <>
            <h1>Hello, {userStore.user.name}!</h1>
        </>
    );
});
