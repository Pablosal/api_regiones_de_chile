var express = require("express");
var app = express();
var regionesRoutes = require("./api/routes/regiones.routes");
var comunasRoutes = require("./api/routes/comunas.routes");
app.get("/", (req, res, next) => {
  res.send("hello world");
});
app.use("/api/regiones", regionesRoutes);
app.use("/api/", comunasRoutes);

app.listen(5000);
