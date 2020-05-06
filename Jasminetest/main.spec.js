describe('main.js', function(){
    describe('calculate',function(){
        it('validates expression', function(){
            spyOn(window, 'updateResult').and.stub();
            calculate('3+3')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(6);
        })
    })
})