import express from 'express';
import dotenv from 'dotenv'
import regionsRouter from './v1/routes/regions.routes';
import region from './database/regions';
import provincesRouter from './v1/routes/provinces.routes';
import communesRouter from './v1/routes/communes.routes';
dotenv.config()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/add-country', async (req, res, next) => {


    const addedCountry = await region.addCountry()
    console.log(addedCountry);

    res.json({ msg: "Added Country" })

});
app.use('/api/v1/provinces', provincesRouter);
app.use('/api/v1/regions', regionsRouter);
app.use('/api/v1/communes', communesRouter);
app.listen(process.env.PORT, () => console.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`));
// TOPOJSON ?



