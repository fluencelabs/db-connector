import {API, StringInvoke} from "../as-dependencies/crossmodule/assembly/index"

export declare function allocate(size: usize): i32;
export declare function deallocate(ptr: i32, size: usize): void;
export declare function invoke(ptr: i32, size: usize): i32;
export declare function store(ptr: usize, byte: u8): void;
export declare function load(ptr: usize): u8;

export function getStringInvoker(): StringInvoke {
    let api = new API(invoke, allocate, deallocate, store, load);
    return new StringInvoke(api);
}

export function query(request: string): string {
    let stringInvoker = getStringInvoker();
    let result = stringInvoker.invoke(request);
    return result;
}
