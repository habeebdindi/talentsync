require('dotenv').config();
express = require('express');

const app = express();
const port = process.env.PORT || 8000;

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./documentation/api.docs.json');
const swaggerAuth = require('./documentation/apiAuth.docs.json');

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Talentsync backend assessment!')
});

app.use('/api/v1', require('./app/routes/post.route'));
app.use('/api/auth', require('./app/routes/auth.route'));

//documentation
app.use('/api/docs', swaggerUi.serve, (...args) => swaggerUi.setup(swaggerFile)(...args));
app.use('/api/docs-auth', swaggerUi.serve, (...args) => swaggerUi.setup(swaggerAuth)(...args));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
