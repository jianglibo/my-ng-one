export interface ListResultLinks {
    first: string;
    last: string;
    prev: string;
    next: string;
}

export interface ListResultMeta {
    totalResourceCount: number;
}

export class ListResult<T> {
    constructor(private models: Array<T>, private metaData: ListResultMeta, private links: ListResultLinks) {
    }
}
