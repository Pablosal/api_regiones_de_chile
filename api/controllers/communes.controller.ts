import comunasData from '../../comunas.json';
class CommunesController {
  constructor() { }
  getComunasDe(req, res) {
    const comunaEncontrada = comunasData.find(
      (comuna) => req.params.region_number === comuna.region_number
    );
    if (comunaEncontrada) res.tson(comunaEncontrada);
    res.send('No fue encontrada tu comuna');
  }
}

const communesController = new CommunesController();
export default communesController;
