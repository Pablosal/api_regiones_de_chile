var regiones = require("../../region.json");
class RegionController {
  constructor() {
    // this.jsRegiones = JSON.parse(regiones);
  }
  getAllRegions(req, res) {
    // res.sendStatus(200)
    res.json(regiones);
  }
  getSpecificRegion(req, res) {
    let regionSingular = regiones.find(
      (r) => r.region_number === req.params.id
    );
    if (regionSingular) {
      res.json(regionSingular);
    } else {
      res.send("No ha sido encontrado nada de lo que buscas");
    }
  }
}
const regionController = new RegionController();
module.exports = regionController;
