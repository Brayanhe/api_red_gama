import { Router } from 'express';
const router =  new Router();
import PolizaController  from '../controllers/poliza';
//import auth from '../middleware/auth'

router.post('/poliza',PolizaController.add)
router.patch('/poliza/:id',PolizaController.updatePoliza)
router.get('/poliza',PolizaController.getAll)
router.delete('/poliza/:id',PolizaController.deletePoliza);

export default router;