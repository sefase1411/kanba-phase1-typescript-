/* eslint-disable @typescript-eslint/no-misused-promises */
// rutas para crear columnas tipo kanba una vez el usaurio este autenticado

import { Router } from 'express'
import { createColumnHandler, getColumnsHandler, updateColumnHandler, deleteColumnHandler } from '../controllers/column.controller'
import { authenticateToken } from '../middleware/auth.middleware'

const router = Router()

router.post('/', createColumnHandler)
router.get('/', getColumnsHandler)
router.put('/:id', updateColumnHandler)
router.delete('/:id', deleteColumnHandler)

export default router
