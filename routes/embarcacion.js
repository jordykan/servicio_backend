import routerx from 'express-promise-router'
import embarcacionController from '../controllers/EmbarcacionController'
import auth from '../middlewares/auth'
const router=routerx();

router.post('/add',auth.verifyUsuario,embarcacionController.add);
router.get('/query',auth.verifyUsuario,embarcacionController.query);
router.get('/list',auth.verifyUsuario,embarcacionController.list);
router.put('/update',auth.verifyUsuario,embarcacionController.update);
router.put('/activate',auth.verifyUsuario,embarcacionController.activate);
router.put('/deactivate',auth.verifyUsuario, embarcacionController.deactivate);

export default router