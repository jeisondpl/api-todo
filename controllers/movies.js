import { TodoModel } from '../models/local-file-system/todo.js'
import { validateTodo, validatePartialTodo } from '../schemas/todos.js'

export class TodoController {
  static async getAll(req, res) {
    const { title } = req.query
    const movies = await TodoModel.getAll({ title })
    res.json(movies)
  }

  static async getById(req, res) {
    const { id } = req.params
    const todo = await TodoModel.getById({ id })
    if (todo) return res.json(todo)
    res.status(404).json({ message: 'Todo not found' })
  }

  static async create(req, res) {
    const result = validateTodo(req.body)

    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newTodo = await TodoModel.create({ input: result.data })

    res.status(201).json(newTodo)
  }

  
  static async delete(req, res) {
    const { id } = req.params

    const result = await TodoModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  static async update(req, res) {
    const result = validatePartialTodo(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedTodo = await TodoModel.update({ id, input: result.data })

    return res.json(updatedTodo)
  }
}
