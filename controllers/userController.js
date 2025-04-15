const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Todos los campos son obligatorios' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hashedPassword })
    res.json(user)
  } catch (error) {
    console.error('Error en register:', error)
    res.status(500).json({ msg: 'Error al registrar usuario' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ msg: 'Usuario no existe' })
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(400).json({ msg: 'Credenciales inválidas' })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.json({ token })
}

const verifyToken = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ msg: 'Token requerido' })
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id).select('-password')
    res.json(user)
  } catch {
    res.status(401).json({ msg: 'Token inválido' })
  }
}

const update = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const { name, email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const updated = await User.findByIdAndUpdate(
    decoded.id,
    { name, email, password: hashedPassword },
    { new: true }
  )
  res.json(updated)
}

module.exports = { register, login, verifyToken, update }
