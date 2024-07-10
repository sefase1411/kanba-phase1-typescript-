import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config'

export const authenticateToken = (req: Request, res: Response, next: NextFunction): any => {
  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1]

  if (token == null) {
    res.sendStatus(401)
    return // Ensure to return after sending response
  }

  jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
    if (err != null) {
      res.sendStatus(403)
    } else {
      req.user = user
      next()
    }
  })
}
