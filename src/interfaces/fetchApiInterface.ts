export interface IFetchApi{
    method?:string,
    cache: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached" | "no-store",
    headers?: {},
    body?:string
}