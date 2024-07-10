import express from 'express'
import { config } from 'dotenv'

const app = express()
app.use(express.json())

config()
const PORT = process.env.PORT ?? '3000'

app.get('/sapo', (_, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
