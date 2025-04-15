const express = require('express')
const router = express.Router()
const { register, login, verifyToken, update } = require('../controllers/userController')

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 */
router.post('/register', register)

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Inicia sesión y retorna un token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna el token de autenticación
 */
router.post('/login', login)

/**
 * @swagger
 * /api/user/verifytoken:
 *   get:
 *     summary: Verifica la validez de un token JWT
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Datos del usuario autenticado
 */
router.get('/verifytoken', verifyToken)

/**
 * @swagger
 * /api/user/update:
 *   put:
 *     summary: Actualiza datos del usuario autenticado
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 */
router.put('/update', update)

module.exports = router
