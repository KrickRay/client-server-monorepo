export function getKeys<T extends { new () }>(APIClass: T): Array<keyof InstanceType<T>> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(new APIClass()) as any;
}
