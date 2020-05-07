//test suit
describe('calculator.js', function(){
    it('should add numbers to total', function(){
        const calculator = new Calculator();
        calculator.add(5);
        //expected total to be 5
        expect(calculator.total).toBe(5);
    });

    it('should subtract numbers to total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
    });
    it('should multiple numbers to total', function(){
        const calculator = new Calculator();
        calculator.total = 1;
        calculator.multiply(5);

        expect(calculator.total).toBe(5);
    });
    it('should divide numbers to total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.divide(5);

        expect(calculator.total).toBe(6);
    });

    it('should initial total',function(){
        const calculator = new Calculator();

        expect(calculator.total).toBe(0);
    });
    it('has constructor',function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toEqual(calculator2);
    });
    it('should toBe Truthy/toBeFalsy',function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
    });
    it('instantiates unique objects', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).not.toBe(calculator2);
    });
    it('has common operation', function(){
        const calculator = new Calculator();
        calculator.add(5);
        //Undefined
        expect(calculator.add).not.toBeUndefined();
    });
    it('handle NaN',function(){
        const calculator = new Calculator();

        calculator.total = 20;
        calculator.multiply('a');

        expect(calculator.total).toBeNaN();
    });
    it('handle divide by zero', function(){
        const calculator = new Calculator();
        
        calculator.total = 20;

        expect(function(){calculator.divide(0)}).toThrow();
        expect(function(){calculator.divide(0)}).toThrowError(Error);
        expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
    });
    // 调用throwThis返回的Promise应该以Error拒绝，因此语法应为：
    it('handles divide by zero', function(){
        const calculator = new Calculator();

        calculator.total = 20;

        expect(function(){calculator.divide(0)}).toThrow();

    });    

})