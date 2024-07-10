// Importamos la conexión a la base de datos
import { pool } from '../db'
import { Card } from '../types'

const createCard = async (title: string, description: string, columnId: string, userId: number): Promise<Card> => {
  const result = await pool.query(
    'INSERT INTO cards (title, description, column_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, columnId, userId]
  )
  return result.rows[0]
}

const getCards = async (userId: number): Promise<any> => {
  const result = await pool.query(
    'SELECT * FROM cards WHERE user_id = $1',
    [userId]
  )
  return result.rows
}

const updateCard = async (id: number, title: string, description: number, columnId: string, userId: number): Promise<Card> => {
  const result = await pool.query(
    'UPDATE cards SET title = $1, description = $2, column_id = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
    [title, description, columnId, id, userId]
  )
  return result.rows[0]
}

const deleteCard = async (id: number, userId: number): Promise<Card> => {
  const result = await pool.query(
    'DELETE FROM cards WHERE id = $1 AND user_id = $2 RETURNING *',
    [id, userId]
  )
  return result.rows[0]
}

export { createCard, getCards, updateCard, deleteCard }
