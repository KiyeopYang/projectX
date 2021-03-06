const express = require('express');
const next = require('next');
const helmet = require('helmet');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    // 보안
    server.use(helmet());
    server.get('/list', (req, res) => {
      return app.render(req, res, '/list', req.query)
    });
    server.get('*', handle);
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`SERVER RUNNING ON ${port}`);
    });
  });
