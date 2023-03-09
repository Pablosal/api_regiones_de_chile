import express from 'express';
import dotenv from 'dotenv'
import regionsRouter from './v1/routes/regions.routes';
import region from './database/regions';
import provincesRouter from './v1/routes/provinces.routes';
import communesRouter from './v1/routes/communes.routes';
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from '../documentation.json'
if (process.env.NODE_ENV === "development") {
    dotenv.config()
}

export const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/add-country', async (req, res, next) => {
    const addedCountry = await region.addCountry()
    res.json({ msg: "Added Country", addedCountry })

});

app.use('/api/v1/provinces', provincesRouter);
app.use('/api/v1/regions', regionsRouter);
app.use('/api/v1/communes', communesRouter);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDoc));


export const server = app.listen(process.env.PORT, () => console.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`));




