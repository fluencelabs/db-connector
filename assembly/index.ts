import {getStringInvoker} from "./database";

export function query(request: string): string {
    let stringInvoker = getStringInvoker();
    let result = stringInvoker.invoke(request);
    return result;
}
