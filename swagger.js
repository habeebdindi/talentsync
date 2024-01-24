require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './documentation/api.docs.json';
const outputAuth = './documentation/apiAuth.docs.json';

const endpointFile = ['./app/routes/post.route'];
const endpointAuth = ['./app/routes/auth.route'];


const doc = {
  info: {
    version: '1.0.0',
    title: 'Talentsync assessment API',
    description: 'API documentation for Talentsync assessment endpoints',
  },
  host: 'localhost',
};

const postDoc = {...doc, basePath: '/api/v1'};
const authDoc = {...doc, basePath: '/api/auth'};

swaggerAutogen(outputFile, endpointFile, postDoc);
swaggerAutogen(outputAuth, endpointAuth, authDoc);
