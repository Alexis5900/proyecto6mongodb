const express = require('express')
const router = express.Router()
const { create, readAll, readOne, update, remove } = require('../controllers/productController')

/**
 * @swagger
 * /api/product/create:
 *   post:
 *     summary: Crea un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto creado exitosamente
 */
router.post('/create', create)

/**
 * @swagger
 * /api/product/readall:
 *   get:
 *     summary: Obtiene todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/readall', readAll)

/**
 * @swagger
 * /api/product/readone/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto encontrado
 */
router.get('/readone/:id', readOne)

/**
 * @swagger
 * /api/product/update/{id}:
 *   put:
 *     summary: Actualiza un producto existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado
 */
router.put('/update/:id', update)

/**
 * @swagger
 * /api/product/delete/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado
 */
router.delete('/delete/:id', remove)

module.exports = router
