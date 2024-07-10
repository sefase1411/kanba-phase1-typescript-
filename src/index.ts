import express from 'express'
import userRoutes from './routes/user.routes'
import columnRoutes from './routes/column.routes'
import morgan from 'morgan'
import { PORT } from './config'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/columns', columnRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
