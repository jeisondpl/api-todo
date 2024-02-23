import { Router } from 'express'

import { MovieController } from '../controllers/movies.js'

export const todoRouter = Router()

todoRouter.get('/', MovieController.getAll)
todoRouter.post('/', MovieController.create)

todoRouter.get('/:id', MovieController.getById)
todoRouter.delete('/:id', MovieController.delete)
todoRouter.patch('/:id', MovieController.update)
