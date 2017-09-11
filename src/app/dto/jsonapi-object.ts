export interface Relationship {links: {self: string, related: string}; }

export abstract class AttributesBase {
    createdAt: Date;
    dtoApplyTo: string;
    dtoAction: string;
}

export abstract class JsonapiObject<T extends AttributesBase> {
    id: string;
    type: string;
    links: {self: string};
    abstract attributes: T;
    abstract relationships: {[s: string]: Relationship};
}
