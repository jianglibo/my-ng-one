import { JsonapiObject } from './jsonapi-object';
import { User } from './user';
fdescribe('jsonapi object.', () => {
    it('relationship.', () => {
        let jo = new User();
        jo.relationships = {a: {links: {self: 'a', related: 'b'}}};
        expect(jo.relationships.a.links.self).toBe('a');
    });
    it('attributes.', () => {

    });
 });
