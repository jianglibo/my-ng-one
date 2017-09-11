import { JsonapiObject } from './jsonapi-object';
fdescribe('jsonapi object.', () => {
    it('relationship.', () => {
        let jo = new JsonapiObject();
        jo.relationships ={arelation: {links: {self: 'a', related: 'b'}}};
        expect(jo.relationships.arelation.links.self).toBe('a');
    });
    it('attributes.', () => {
        let jo = new JsonapiObject();
        jo.attributes = {};
    });
 });