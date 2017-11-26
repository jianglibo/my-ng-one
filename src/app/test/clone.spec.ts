class Example {
    constructor(public type: string) {
    }
  }

class Customer {
  constructor(public name: string, public example: Example) {
  }
  greet() {
    return 'Hello ' + this.name;
  }
}


describe('clone tests', () => {
    let customer: Customer;

    beforeEach(() => {
        customer = new Customer('David', new Example('DavidType'));
    });

    it('Spread, Properties: Yes, Methods: No, Deep Copy: No', () => {
    let clone = {...customer};
    expect(clone.name).toBe('David');
    expect(clone.example.type).toBe('DavidType');
    expect(clone.example).toEqual(customer.example);

    clone.example.type = 'Abb';
    expect(clone.example).toEqual(customer.example);
    expect(customer.example.type).toEqual('Abb');
    });

    it('Object.assign, Properties: Yes, Methods: No, Deep Copy: No', () => {
    let clone = Object.assign({}, customer);
    expect(clone.name).toBe('David');
    expect(clone.example.type).toBe('DavidType');
    expect(clone.example).toEqual(customer.example);

    clone.example.type = 'Abb';
    expect(clone.example).toEqual(customer.example);
    expect(customer.example.type).toEqual('Abb');
    });

    it('should delete property.', () => {
        let o = {a: 1, b: 2};
        delete o.a;
        expect(o.a).toBeUndefined();
    });

    it('should get keyof.', () => {
        let o = {a: 1, b: 2};
        let a = [];
        for (let k in o) {
            a.push(k);
        }
        expect(a.length).toBe(2);
    });
});
