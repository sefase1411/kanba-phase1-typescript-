import { Request, Response } from 'express'
import { createUser, getUserByUsername } from '../models/user.model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config'

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = await req.body

    if (username === undefined || password === undefined) {
      res.status(400).json({ message: 'Username and password are required' })
      return
    }
    const user = await createUser(username, password)
    res.status(201).json({ message: 'User created', user })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = await req.body
    const user = await getUserByUsername(username)

    if (user === undefined) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials' })
      return
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY ?? '', {
      expiresIn: '1h'
    })
    res.status(200).json({ message: 'User logged in', token })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const logout = (_req: Request, res: Response): void => {
  res.status(200).json({ message: 'Logout successful. Please remove your token.' })
}
