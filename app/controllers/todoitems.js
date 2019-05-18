const TodoItem = require('../../models').TodoItem

module.exports = {
  create (req, res) {
    console.log('Request:'+req.body);
    return TodoItem.create({
      content: req.body.content,
      todoId: req.params.todoId
    })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error =>  {
        console.log(error);
        res.status(400).send(error)
      })
  },

  update (req, res) {
    console.log('Request:'+req.body);
    return TodoItem.findOne({
      where: {
        id: req.params.todoItemId,
        todoId: req.params.todoId
      }
    })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({ message: 'Todo Item not found' })
        }
        return todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => {
            console.log(error);
            res.status(400).send(error + 'Unable Update Todo Item1')
          })
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error + 'Unable Update Todo Item2')
      })
  },

  destroy (req, res) {
    console.log('Request:'+req.body);
    return TodoItem.findOne({
      where: {
        id: req.params.todoItemId,
        todoId: req.params.todoId
      }
    })
      .then(todoItem => {
        console.log(todoItem)
        if (!todoItem) {
          return res.status(404).send({ message: 'Todo Item not found' })
        }
        return todoItem
          .destroy()
          .then(() =>
            res.status(200).send({ message: 'Todo Item deleted successfully.' })
          )
          .catch(error => {
            console.log(error);
            res.status(400).send(error + 'Todo1')
          })
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error + 'Todo2')
      })
  }
}
