import express from 'express'
import { PORT } from './config'

const app = express()
app.use(express.json())

app.get('/sapo', (_, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
