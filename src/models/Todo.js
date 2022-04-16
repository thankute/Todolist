const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({ 
    name: {type: "String"}
}, {timestamps: true})

module.exports = mongoose.model('todos', TodoSchema)
