import { LoginAttempt } from './login-attempt';
import 'reflect-metadata';
import { DtoDescriptionKey } from './dto-description';

describe('Dto annotations', () => {
    it('class annotations', () => {
        const an: any = Reflect.getMetadata(DtoDescriptionKey, LoginAttempt) as {nameInUrl: string};
        expect(an.nameInUrl).toBe('loginAttempts');
    });
});
