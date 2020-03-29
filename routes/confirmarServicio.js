import routerx from 'express-promise-router'
import confirmarServicioController from '../controllers/ConfirmarServicioController'
import auth from '../middlewares/auth'
const router=routerx();

router.post('/add',auth.verifyComercial,confirmarServicioController.add);
router.get('/query',auth.verifyComercial,confirmarServicioController.query);
router.get('/list',auth.verifyComercial,confirmarServicioController.list);
router.get('/listServicio',auth.verifyComercial,confirmarServicioController.listServicio);
router.get('/listServicioTerr',auth.verifyLogisticaTerrestre,confirmarServicioController.listServicioTerrestre);
router.put('/update',auth.verifyComercial,confirmarServicioController.update);
router.put('/activate',auth.verifyComercial,confirmarServicioController.activate);
router.put('/deactivate',auth.verifyComercial, confirmarServicioController.deactivate);

export default router