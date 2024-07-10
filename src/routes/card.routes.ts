import express from 'express'

import {
  createCardHandler,
  getCardsHandler,
  updateCardHandler,
  deleteCardHandler
} from '../controllers/card.controller'

const router = express.Router()

router.post('/', createCardHandler)

router.get('/', getCardsHandler)

router.put('/:id', updateCardHandler)

router.delete('/:id', deleteCardHandler)

export default router
