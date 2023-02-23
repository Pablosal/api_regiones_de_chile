import regiones from '../../region.json';
class RegionsController {
  constructor() {
    // this.tsRegiones = JSON.parse(regiones);
  }
  getAllRegions(req, res) {
    // res.sendStatus(200)
    res.tson(regiones);
  }

}
const regionsController = new RegionsController();
export default regionsController;
