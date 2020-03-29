import routerx from 'express-promise-router'
import ofHireController from '../controllers/OfHireController'
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verifyLogistica,ofHireController.add);
router.get('/query',auth.verifyLogistica,ofHireController.query);
router.get('/list',auth.verifyLogistica,ofHireController.list);
router.put('/update',auth.verifyLogistica,ofHireController.update);
router.put('/activate',auth.verifyLogistica,ofHireController.activate);
router.put('/deactivate',auth.verifyLogistica, ofHireController.deactivate);

export default router