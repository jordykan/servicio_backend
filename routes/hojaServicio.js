import routerx from 'express-promise-router'
import hojaServicioController from '../controllers/HojaServicioController'
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verifyLogistica,hojaServicioController.add);
router.get('/query',auth.verifyLogistica,hojaServicioController.query);
router.get('/list',auth.verifyLogistica,hojaServicioController.list);
router.put('/update',auth.verifyLogistica,hojaServicioController.update);
router.put('/activate',auth.verifyLogistica,hojaServicioController.activate);
router.put('/deactivate',auth.verifyLogistica, hojaServicioController.deactivate);

export default router