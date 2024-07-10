import { User } from '../models/user.model'

declare module 'express' {
  interface Request {
    user?: User
    username: string
    password: string
  }
}

export interface Card {
  title: string
  description: string
  columnId: number
}

export interface Column {
  name: string
}
