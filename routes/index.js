import routerx from 'express-promise-router'
import embarcacionRouter from './embarcacion'
import agenciaRouter from './agencia'
import companiaRouter from './compania'
import confirmarServicio from './confirmarServicio'
import onhire from './onhire'
import usuario from './usuario'
import monitoreo from './monitoreo'
import ofhire from './ofhire'
import hojaServicio from './hojaServicio'

const router=routerx()

router.use('/embarcacion',embarcacionRouter)
router.use('/agencia',agenciaRouter)
router.use('/compania',companiaRouter)
router.use('/confirmarServicio',confirmarServicio)
router.use('/onhire',onhire)
router.use('/usuario',usuario)
router.use('/monitoreo',monitoreo)
router.use('/ofhire',ofhire)
router.use('/hojaServicio',hojaServicio)

export default router