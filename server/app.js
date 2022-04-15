const express = require('express')
const port = process.env.PORT || 5000
const cors = require('cors')
const app = express()
const calculatorRoutes = require('./routes/calculatorRoutes')

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(express.json())
app.use(require('morgan')('dev'))
app.use('/api/calculate', calculatorRoutes)

app.listen(port, () => console.log(`Server running on port ${port}!`))