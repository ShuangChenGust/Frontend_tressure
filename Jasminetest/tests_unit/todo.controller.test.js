const TodoController = require('../../controllers/todo.xontroller');
const TodoModel = require('../../model/todo.model')


describe('TodoController.createTodo', ()=> {
    it('should have a create Todo function', ()=>{
        expect(typeof TodoController.createTodo).toBe("function")
    })
})