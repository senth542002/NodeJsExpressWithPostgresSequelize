const Todo = require('../../models').Todo
const TodoItem = require('../../models').TodoItem

module.exports = {
  create (req, res) {
    console.log('Request:'+req.body);
    return Todo.create({
        title: req.body.title
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => {
        console.log(error);
        res.status(400).send(error)
      })
  },

  list (req, res) {
    console.log('Request:'+req.body);
    return Todo.findAll({
      include: [
        {
          model: TodoItem,
          as: 'todoItems'
        }
      ]
    })
      .then(todos => res.status(200).send(todos))
      .catch(error => {
        console.log(error);
        res.status(400).send(error)
      })
  },

  update (req, res) {
    console.log('Request:'+req.body);
    return Todo.findByPk(req.params.todoId, {
      include: [
        {
          model: TodoItem,
          as: 'todoItems'
        }
      ]
    })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo not found'
          })
        }
        return todo
          .update({
            title: req.body.title || todo.title
          })
          .then(todo => res.status(200).send(todo))
          .catch(error => {
            console.log(error);
            res.status(400).send(error)
          })
      })
      .catch(error => res.status(400).send(error))
  },

  destroy (req, res) {
    console.log('Request:'+req.body);
    return Todo.findByPk(req.params.todoId, {
      include: [
        {
          model: TodoItem,
          as: 'todoItems'
        }
      ]
    })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo not found'
          })
        }
        return todo
          .destroy()
          .then(() =>
            res.status(200).send({ message: 'Todo deleted successfully.' })
          )
          .catch(error => {
            console.log(error);
            res.status(400).send(error)
          })
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error)
      })
  }
}
