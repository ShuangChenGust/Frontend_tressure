//test suit
describe('calculator.js', function(){
    let calculator;
    let calculator2;
    beforeEach



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
    //"toBeDefined"判断是否定义
    it("The 'toBeDefined' matcher compares against 'undefined'", function() {
        var a = {
            foo: "foo"
        };
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });
    //"toBeUndefined"判断是否是undefined，与"toBeDefined"相反
    it("The 'toBeUndefined' matcher compares against 'undefined'", function() {
        var a = {
            foo: "foo"
        };
        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });
    //"toBeNull"判断是否为null
    it("The 'toBeNull' matcher compares against null", function() {
        var a = null;
        var foo = "foo";
        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });
    //"toContain"判断数组是否包含（可判断基本类型和对象）
    it("The 'toContain' matcher is for finding an item in an Array", function() {
        var a = ["foo", "bar", "baz"];
        var b = [{foo: "foo", bar: "bar"}, {baz: "baz", bar: "bar"}];
        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
        expect(b).toContain({foo: "foo", bar: "bar"});
        expect(b).not.toContain({foo: "foo", baz: "baz"});
    });
    //"toBeLessThan"判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）
    it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
            e = 2.78;
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
        expect("a").toBeLessThan("b");
        expect("b").not.toBeLessThan("a");
    });
    //"toBeGreaterThan"判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）
    it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
            e = 2.78;
        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
        expect("a").not.toBeGreaterThan("b");
        expect("b").toBeGreaterThan("a");
    });
    //"toBeCloseTo"判断数字是否相似（第二个参数为小数精度，默认为2位）
    it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
        var a = 1.1;
        var b = 1.5;
        var c = 1.455;
        var d = 1.459;
        expect(a).toBeCloseTo(b, 0);
        expect(a).not.toBeCloseTo(c, 1);
        expect(c).toBeCloseTo(d);
    });
    //"toThrow"判断是否抛出异常
    it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
        var foo = function() {
            return 1 + 2;
        };
        var bar = function() {
            return a + 1;
        };
        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });
    //"toThrowError"判断是否抛出了指定的错误
    it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
        var foo = function() {
            throw new TypeError("foo bar baz");
        };
        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
    });
    
});

// * spyOn().and.callThrough()，告诉Jasmine我们除了要完成对函数调用的跟踪，同时也需要执行实际的代码。
    // * */
describe("A spy, when configured to call through", function() {
    var foo, bar, fetchedBar;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };
        spyOn(foo, "getBar").and.callThrough(); // 这里使用了callThrough，这时所有的函数调用为真实的执行
        spyOn(foo, "setBar").and.callThrough();
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function() {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function() {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(bar).toEqual(123); // 由于是真实调用，因此bar有了真实的值
    });
    it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(123); // 由于是真实调用，fetchedBar也有了真实的值
    });
});     

    // /*
    // * Jasmine可以支持spec中执行异步操作。
    // * 当调用beforeEach, it和afterEach时，函数可以包含一个可选参数done，当spec执行完毕之后，调用done通知Jasmine异步操作已执行完毕。
    // *
    // * 另外补充一点，如果需要设置全局的默认超时时间，可以设置jasmine.DEFAULT_TIMEOUT_INTERVAL的值，
    // * 当异步执行时间超过设置的执行超时时间js将会报错。
    // * */
describe("Asynchronous specs", function() {
    var value;

    beforeEach(function(done) {
        setTimeout(function() {
            value = 0;
            done();
        }, 1);
    });

    // 在上面beforeEach的done()被执行之前，这个测试用例不会被执行
    it("should support async execution of test preparation and expectations", function(done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done(); // 执行完done()之后，该测试用例真正执行完成
    });

    // Jasmine异步执行超时时间默认为5秒，超过后将报错
    describe("long asynchronous specs", function() {
        var originalTimeout;

        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            // 设置全局的默认超时时间
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
        });

        it("takes a long time", function(done) {
            setTimeout(function() {
                done();
            }, 4000);
        });

        // 如果要调整指定用例的默认的超时时间，可以在beforeEach，it和afterEach中传入一个时间参数
        //it("takes a long time for this spec", function(done) {
        //    setTimeout(function() {
        //        done();
        //    }, 6000);
        //}, 7000);

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
});
