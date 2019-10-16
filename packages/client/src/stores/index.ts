import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

export function useStores(): typeof stores {
    return useContext(MobXProviderContext);
}

export const stores = {};
