import routerx from 'express-promise-router'
import companiaController from '../controllers/CompaniaController'
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verifyUsuario,companiaController.add);
router.get('/query',auth.verifyUsuario,companiaController.query);
router.get('/list',auth.verifyUsuario,companiaController.list);
router.put('/update',auth.verifyUsuario,companiaController.update);
router.put('/activate',auth.verifyUsuario,companiaController.activate);
router.put('/deactivate', auth.verifyUsuario,companiaController.deactivate);

export default router