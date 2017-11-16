import { JsonapiObjectType } from '../services/data-store';
import { DtoDescriptionKey } from './dto-description';
export interface Relationship {links: {self: string, related: string}; }

export abstract class AttributesBase {
    createdAt?: number;
    dtoApplyTo?: string;
    dtoAction?: string;
}

export interface AttributeType<T extends AttributesBase> {
    new(): T;
}

export abstract class JsonapiObject<E extends AttributesBase> {
    constructor(jt: any) {
        this.type = Reflect.getMetadata(DtoDescriptionKey, jt).nameInUrl;
    }
    id: string | number;
    type: string;
    links: {self: string};
    abstract attributes: E;
    relationships?: {[s: string]: Relationship};
}
