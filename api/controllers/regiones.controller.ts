import regiones from '../../region.json';
class RegionController {
  constructor() {
    // this.tsRegiones = JSON.parse(regiones);
  }
  getAllRegions(req, res) {
    // res.sendStatus(200)
    res.tson(regiones);
  }

}
const regionController = new RegionController();
export default regionController;
