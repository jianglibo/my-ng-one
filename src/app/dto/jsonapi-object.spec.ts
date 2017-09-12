import { JsonapiObject } from './jsonapi-object';
import { User } from './user';

describe('jsonapi object.', () => {
    it('relationship.', () => {
        let jo = new User();
        jo.relationships = {
            unreads: {links: {self: 'a', related: 'b'}},
            followers: {links: {self: 'a', related: 'b'}}
        };
        expect(jo.relationships.unreads.links.self).toBe('a');
    });
    it('attributes.', () => {

    });
 });
