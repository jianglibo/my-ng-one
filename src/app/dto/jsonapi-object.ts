export interface Relationship {links: {self: string, related: string}; }

export abstract class AttributesBase {
    createdAt: Date;
    dtoApplyTo: string;
    dtoAction: string;
}

export interface AttributeType<T extends AttributesBase> {
    new(): T;
}

export abstract class JsonapiObject<E extends AttributesBase> {
    id: string;
    type: string;
    links: {self: string};
    abstract attributes: E;
    abstract relationships: {[s: string]: Relationship};
}
