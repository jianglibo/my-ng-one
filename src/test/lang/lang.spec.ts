describe('for.', () => {
    it('for in.', () => {
        let o = {a: 1, b: 2};
        let a = [];
        expect(Object.getOwnPropertyNames(o).length).toBe(2);
        expect(Object.keys(o).length).toBe(2);
        let c = Object.keys(o).map((v, i, a1) => {
            return v + '=' + o[v];
        }).join('&');

        expect(c).toBe('a=1&b=2');
   });

   it('should slice array.', () => {
       let ary = [1, 2, 3];
       expect(ary.slice().length).toBe(3);
       expect(ary === ary.slice()).toBeFalsy();
       let b = ary;
       expect(ary === b).toBeTruthy();
   });
  });
