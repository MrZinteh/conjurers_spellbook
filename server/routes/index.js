const express = require('express');

const familiarsRoutes = require('./familiars');
const feySpiritRoutes = require('./feySpirits');
const shadowSpiritsRoutes = require('./shadowSpirits');
const abberationsRoutes = require('./abberations');
const constructsRoutes = require('./constructs');
const elementalsRoutes = require('./elementals');
const draconicSpiritsRoutes = require('./draconicSpirits');
const fiendsRoutes = require('./fiends');
const minionsRoutes = require('./minions');

const router = express.Router();

router.get('/familiars', familiarsRoutes.familiarsGet);
router.get('/feySpirits', feySpiritRoutes.feySpiritsGet);
router.get('/shadowSpirits', shadowSpiritsRoutes.shadowSpiritsGet);
router.get('/aberrations', abberationsRoutes.abberationsGet);
router.get('/constructs', constructsRoutes.constructsGet);
router.get('/elementals', elementalsRoutes.elementalsGet);
router.get('/elementals/minor', elementalsRoutes.minorElementalsGet);
router.get('/draconicSpirits', draconicSpiritsRoutes.draconicSpiritsGet);
router.get('/fiends', fiendsRoutes.fiendsGet);
router.get('/fiends/lesserDemons', fiendsRoutes.lesserDemonsGet);
router.get('/fiends/greaterDemons', fiendsRoutes.greaterDemonsGet);
router.get('/minions', minionsRoutes.minionsGet);
router.post('/minions', minionsRoutes.minionsPost);
router.delete('/minions', minionsRoutes.minionsDelete);

module.exports = router;