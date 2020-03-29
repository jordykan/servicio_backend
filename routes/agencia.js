import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import agenciaController from '../controllers/AgenciaController'

const router=routerx();

router.post('/add',auth.verifyUsuario,agenciaController.add);
router.get('/query',auth.verifyUsuario,agenciaController.query);
router.get('/list',auth.verifyUsuario,agenciaController.list);
router.put('/update',auth.verifyUsuario,agenciaController.update);
router.put('/activate',auth.verifyUsuario,agenciaController.activate);
router.put('/deactivate',auth.verifyUsuario, agenciaController.deactivate);


export default router