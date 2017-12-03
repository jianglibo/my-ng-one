class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

describe('new usage.', () => {
    it('new should work', () => {
    const c = new (() => {});
    console.log(typeof c);
    // let o = new c();
    // console.log(typeof o);

    // c = new ((a: number) => {})(1);
    // const o = new c();
    // console.log(typeof c);
    // const nt: string = createInstance(Lion).keeper.nametag;
    // const bt: boolean = createInstance(Bee).keeper.hasMask;
    });

    it('object destruction', () => {
        const o = {
            a: 'foo',
            b: 12,
            c: 'bar'
        };
        let { a, b } = o;
        expect(a).toBe('foo');
        expect(b).toBe(12);

        ({ a, b } = { a: 'baz', b: 101 });

        const { a: newName1, b: newName2 } = o;
        expect(newName1).toBe('foo');
        expect(newName2).toBe(12);
    });
  });
