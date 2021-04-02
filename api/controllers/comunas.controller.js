const comunasData = require("../../comunas.json");
class ComunasController {
  constructor() {}
  getComunasDe(req, res) {
    const comunaEncontrada = comunasData.find(
      (comuna) => req.params.region_number === comuna.region_number
    );
    if (comunaEncontrada) res.json(comunaEncontrada);
    res.send("No fue encontrada tu comuna");
  }
}

const comunasController = new ComunasController();

module.exports = comunasController;
