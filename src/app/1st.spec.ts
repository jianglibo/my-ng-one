describe('1st tests', () => {
    const i = 5;
    it('true is true', () => expect(i).toBe(5));
});

describe('array tests', () => {
    const ary: any[] = [5, 5, 6, '7'];
    it('true is true', () => expect(ary.length).toBe(4));
});

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}

describe('class tests', () => {
    const greeter = new Greeter('world');
    it('true is true', () => expect(greeter.greeting).toBe('world'));
});

function classDecorator<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}

@classDecorator
class Greeter1 {
    property = 'property';
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

describe('deco tests', () => {
    const greeter = new Greeter1('world');
    const o = {a: 1};
    Object.seal(o);
    o['b'] = 55;
    it('true is true', () => expect(greeter.hello).toBe('override'));
});
