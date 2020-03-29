import routerx from 'express-promise-router'
import onhireController from '../controllers/OnhireController'
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verifyLogistica,onhireController.add);
router.get('/query',auth.verifyLogistica,onhireController.query);
router.get('/list',auth.verifyLogistica,onhireController.list);
router.put('/update',auth.verifyLogistica,onhireController.update);
router.put('/activate',auth.verifyLogistica,onhireController.activate);
router.put('/deactivate',auth.verifyLogistica, onhireController.deactivate);

export default router