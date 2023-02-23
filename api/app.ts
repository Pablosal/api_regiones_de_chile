import express from 'express';
import comunasRouter from './v1/routes/communes.routes';
import regionesRoutes from './v1/routes/regions.routes';
import dotenv from 'dotenv'
dotenv.config()

var app = express();

app.get('/', (req, res) => {
  res.send('hello my  ');
});
app.use('/api/v1/regiones', regionesRoutes);
app.use('/api/v1/communes', comunasRouter);

app.listen(process.env.PORT, () => console.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`));
// TOPOJSON ?



