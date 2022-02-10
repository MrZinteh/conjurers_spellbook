const express = require('express');

const familiarsRoutes = require('./familiars');
const feySpiritRoutes = require('./feySpirits');
const shadowSpiritsRoutes = require('./shadowSpirits');
const abberationsRoutes = require('./abberations');
const constructsRoutes = require('./constructs');
const elementalsRoutes = require('./elementals');
const draconicSpiritsRoutes = require('./draconicSpirits');
const fiendsRoutes = require('./fiends');

const router = express.Router();

router.get('/familiars', familiarsRoutes.familiarsGet);
router.get('/feySpirits', feySpiritRoutes.feySpiritsGet);
router.get('/shadowSpirits', shadowSpiritsRoutes.shadowSpiritsGet);
router.get('/abberations', abberationsRoutes.abberationsGet);
router.get('/constructs', constructsRoutes.constructsGet);
router.get('/elementals', elementalsRoutes.elementalsGet);
router.get('/draconicSpirits', draconicSpiritsRoutes.draconicSpiritsGet);
router.get('/fiends', fiendsRoutes.fiendsGet);

module.exports = router;