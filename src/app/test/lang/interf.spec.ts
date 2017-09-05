
describe('interface usage.', () => {
    it('type should work.', () => {
        interface NumberDictionary {
            length: number;    // ok, length is a number
            name: string;      // error, the type of 'name' is not a subtype of the indexer
            [fc: string]: any;
        }

        interface StringArray {
            [index: number]: string;
        }

        let myArray: StringArray;
        myArray = ['Bob', 'Fred'];

        const myStr: string = myArray[0];
        expect(myStr).toBe('Bob');

        type Afn = (a: number) => string;

        interface ClockConstructor {
            new (hour: number, minute: number);
        }

        type C = new (hour: number, minute: number) => string;

    });
  });
