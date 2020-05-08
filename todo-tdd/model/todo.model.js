const mongoose = require('mongoose');
const TodoModel = require('../../model/todo.model');

TodoModel.create = jest.fn();

const ToDoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    done:{
        type:Boolean,
        required:true
    }
});

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = TodoModel;