import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import primesRoutes from './routes/primes.js'
import userRoutes from './routes/user.js'

dotenv.config()
const PORT = process.env.PORT

connectDB();

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("server is running")
})

app.use('/api', primesRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server listens for port ${PORT}`)
})