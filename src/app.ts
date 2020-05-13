import Koa from 'koa';

import db from 'config/db';

db.on('error', (error) => {
  console.log(`Mongoose connection error: ${error}`);
});

const app = new Koa();

app.on('error', (error) => {
  console.log(error);
});

export default app;
