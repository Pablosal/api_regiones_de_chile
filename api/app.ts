import express from 'express';
import dotenv from 'dotenv'
import regionsRouter from './v1/routes/regions.routes';
dotenv.config()

const app = express();


app.use('/api/v1/regions', regionsRouter);

app.listen(process.env.PORT, () => console.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`));
// TOPOJSON ?



