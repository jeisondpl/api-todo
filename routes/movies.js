import { Router } from 'express'

import { TodoController } from '../controllers/movies.js'

export const todoRouter = Router()

todoRouter.get('/', TodoController.getAll)
todoRouter.post('/', TodoController.create)

todoRouter.get('/:id', TodoController.getById)
todoRouter.delete('/:id', TodoController.delete)
todoRouter.patch('/:id', TodoController.update)
