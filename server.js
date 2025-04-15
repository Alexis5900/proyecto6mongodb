require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { swaggerUi, specs } = require('./swagger')

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log(err))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)

app.get('/', (req, res) => {
  res.send('API funcionando correctamente')
})

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})
