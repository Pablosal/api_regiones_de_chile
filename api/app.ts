import express from 'express';
import comunasRouter from './routes/comunas.routes';
import regionesRoutes from './routes/regiones.routes';


var app = express();
app.get('/', (req, res) => {
  res.send('hello my  ');
});
app.use('/api/regiones', regionesRoutes);
app.use('/api/', comunasRouter);

app.listen(5000, () => console.log("Api creada a 10"));
