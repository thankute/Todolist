const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

router.get('/', async (req, res, next) => {
    const todo = await Todo.find().lean().sort({createdAt: -1})
    res.render('home', {todo: todo})
})

router.post('/', (req, res, next) => {
    const formData = req.body
    const todo = new Todo(formData)
    todo.save()
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => {
            console.log(error.message)
        })

})

router.get('/:id/update' ,async (req, res, next) => {
    const todo = await Todo.findById(req.params.id).lean()
    res.render('edit', {todo: todo})
})

router.put('/:id' , (req, res, next) => {
    Todo.findByIdAndUpdate( req.params.id, {
        name: req.body.name
    })
        .then(() => res.redirect('/'))
        .catch(next)

})

router.delete('/:id', (req, res, next) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch(next)
})


module.exports = router
