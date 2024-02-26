const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  swaggerDefinition: {
    restapi: '3.0.0',
    info: {
      title: 'UMS Backend',
      version: '0.0.1',
      description: 'DB Interface Layer and Backend for UMS',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['./Routers/*.js'],

}

const specs = swaggerJsdoc(options)

// CDN CSS
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs,
    { customCssUrl: CSS_URL }))
}