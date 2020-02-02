import { UserAPI } from "app";

export const userAPI: UserAPI = {
    getUser: async () => ({
        name: "Test"
    }),
    setName: async name => ({
        name
    })
};
