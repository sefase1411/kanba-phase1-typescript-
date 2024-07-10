import { createCard, getCards, updateCard, deleteCard } from '../models/card.model'
import { Request, Response } from 'express'

const createCardHandler = async (req: Request, res: Response): Promise<void> => {
  const { title, description, columnId } = req.body
  const card = await createCard(title, description, columnId, req.user.id)
  res.json(card)
}

const getCardsHandler = async (req: Request, res: Response): Promise<void> => {
  const cards = await getCards(req.user.id)
  res.json(cards)
}

const updateCardHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const { title, description, columnId } = req.body
  const card = await updateCard(Number(id), title, description, columnId, req.user.id)
  res.json(card)
}

const deleteCardHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const card = await deleteCard(Number(id), req.user.id)
  res.json(card)
}

export { createCardHandler, getCardsHandler, updateCardHandler, deleteCardHandler }
