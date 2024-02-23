import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils.js'

const todos = readJSON('./todo.json')

export class TodoModel {
  static async getAll({ title }) {
    if (title) {
      return todos.filter((todo) => todo.genre.some((g) => g.toLowerCase() === title.toLowerCase()))
    }

    return todos
  }

  static async getById({ id }) {
    const todo = todos.find((todo) => todo.id === id)
    return todo
  }

  static async create({ input }) {
    const newTodo = {
      id: randomUUID(),
      ...input,
    }

    todos.push(newTodo)

    return newTodo
  }

  static async delete({ id }) {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex === -1) return false

    todos.splice(todoIndex, 1)
    return true
  }

  static async update({ id, input }) {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex === -1) return false

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...input,
    }

    return todos[todoIndex]
  }
}
