import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import { UserStore } from "./user";

export const stores = {
    userStore: new UserStore()
};

export function useStores(): typeof stores {
    return useContext(MobXProviderContext);
}
