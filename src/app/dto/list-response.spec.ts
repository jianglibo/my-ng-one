import { JsonapiObject } from './jsonapi-object';
import { ListResponse } from './list-response';
import { User } from './user';
import { UserAttributes } from './user-attributes';
import { USER_BODY } from '../fixtures/usersgetone';
import { USERS_BODY } from '../fixtures/usersgetlist';

const AC_ONE = {"v": "X"};

class Ac {
    v: 'A' | 'B';
}

describe('list response.', () => {
    it('string options.', () => {
        let jo = AC_ONE as Ac;
        expect(jo.v).toBe('X');
    });
    it('user list response.', () => {
        let jo = <ListResponse<UserAttributes, User>>USERS_BODY;
        expect(jo.data.length).toBe(4);
        expect(jo.data[0].id).toBe("1277956");
        expect(jo.data[0].attributes.createdAt).toBe(1499931915901);
        expect(jo.data[0].relationships.followers.links.related).toBe('http://localhost/jsonapi/users/1277956/followers');
    });
 });

