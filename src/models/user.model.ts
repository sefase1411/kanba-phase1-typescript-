import { pool } from '../db'
import bcrypt from 'bcryptjs'

const createUser = async (username: string, password: string): Promise<any> => {
  const hashedPassword = await bcrypt.hash(password, 10)

  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  )

  return result.rows[0]
}

const getUserByUsername = async (username: string): Promise<any> => {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  )
  return result.rows[0]
}

export { createUser, getUserByUsername }
