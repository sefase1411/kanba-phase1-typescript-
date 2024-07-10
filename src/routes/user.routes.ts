import { Router } from 'express'
import { login, logout, register } from '../controllers/user.controller'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/register', register)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/login', login)
router.post('/logout', logout)

export default router
