const express = require('express');
const cors = require('cors');
require('dotenv').config();

const router = require('./router');
const middleware = require('./middleware');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(middleware.log);
app.use(router.userRoutes);
app.use(router.loginRoutes);
app.use(router.schoolRoutes);
app.use(router.courseRoutes);

app.listen(PORT, () => {
  console.log('API rodando na porta', PORT);
});