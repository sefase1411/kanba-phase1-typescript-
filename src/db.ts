import { Pool } from 'pg'
import { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } from './config'

export const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  port: parseInt(DB_PORT ?? '5432')
})
