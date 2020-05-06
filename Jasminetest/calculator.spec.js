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

    });
    it('should divide numbers to total', function(){

    });

    it('should test',function(){
        const calculator = new Calculator();

        expect(calculator.total).toBe(0);
    });
    it('has constructor',function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toEqual(calculator2);
    });
    it('should initiate the total',function(){
        //unfiinished//
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
})