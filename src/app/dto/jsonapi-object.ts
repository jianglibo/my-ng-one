export class JsonapiObject {
    id: string;
    type: string;
    attributes: {[s: string]: any};
    relationships: {[s: string]: {links: {self: string, related: string}}}
    links: {self: string}
}
