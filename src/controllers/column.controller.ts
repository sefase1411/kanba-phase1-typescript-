import { createColumn, getColumns, updateColumn, deleteColumn } from '../models/column.model'
import { Request, Response } from 'express'

const createColumnHandler = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body
  const column = await createColumn(name, req.user.id)
  res.json(column)
}

const getColumnsHandler = async (req: Request, res: Response): Promise<void> => {
  const columns = await getColumns(req.user.id)
  res.json(columns)
}

const updateColumnHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const { name } = req.body
  const column = await updateColumn(Number(id), name, req.user.id)
  res.json(column)
}

const deleteColumnHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const column = await deleteColumn(Number(id), req.user.id)
  res.json(column)
}

export { createColumnHandler, getColumnsHandler, updateColumnHandler, deleteColumnHandler }
