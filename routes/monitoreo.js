import routerx from 'express-promise-router'
import monitoreoController from '../controllers/MonitoreoController'
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verifyAdministrador,monitoreoController.add);
router.get('/query',auth.verifyAdministrador,monitoreoController.query);
router.get('/queryDetalles',auth.verifyAdministrador,monitoreoController.queryDetalles);
router.get('/list',auth.verifyAdministrador,monitoreoController.list);
router.put('/update',auth.verifyAdministrador,monitoreoController.update);
router.put('/activate',auth.verifyAdministrador,monitoreoController.activate);
router.put('/deactivate',auth.verifyAdministrador, monitoreoController.deactivate);

export default router