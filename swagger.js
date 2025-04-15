const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Proyecto 6 - Usuarios y Productos',
      version: '1.0.0',
      description: 'Documentación de endpoints para autenticación y productos'
    },
    servers: [
      {
        url: 'https://proyecto6mongodb.onrender.com',
        description: 'Servidor de producción'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./routes/*.js']
}

const specs = swaggerJsdoc(options)

module.exports = { swaggerUi, specs }
