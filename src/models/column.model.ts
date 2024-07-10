import { pool } from '../db'
import { Column } from '../types'

const createColumn = async (name: string, userId: number): Promise<Column> => {
  const result = await pool.query(
    'INSERT INTO columns (name, user_id) VALUES ($1, $2) RETURNING *',
    [name, userId]
  )
  return result.rows[0]
}

const getColumns = async (userId: number): Promise<any> => {
  const result = await pool.query(
    'SELECT * FROM columns WHERE user_id = $1',
    [userId]
  )
  return result.rows
}

const updateColumn = async (id: number, name: string, userId: number): Promise<Column> => {
  const result = await pool.query(
    'UPDATE columns SET name = $1 WHERE id = $2 AND user_id = $3 RETURNING *',
    [name, id, userId]
  )
  return result.rows[0]
}

const deleteColumn = async (id: number, userId: number): Promise<Column> => {
  const result = await pool.query(
    'DELETE FROM columns WHERE id = $1 AND user_id = $2 RETURNING *',
    [id, userId]
  )
  return result.rows[0]
}

export { createColumn, getColumns, updateColumn, deleteColumn }
