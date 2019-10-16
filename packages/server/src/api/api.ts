import { APID } from "app";

export class API implements APID {
    getUsers = async () => [
        {
            name: "Test"
        }
    ];
    setName = async name => ({
        name
    });
}
