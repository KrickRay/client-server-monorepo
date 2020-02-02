export interface User {
    name: string;
}

export class UserAPI {
    getUser: () => Promise<User> = null;
    setName: (name: string, surname: string) => Promise<User> = null;
}
