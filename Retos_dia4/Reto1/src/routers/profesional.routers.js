const {Router} = require ("express")
const router = Router();
const profesionalCtrl = require ("../controller/profesional.controller")

router.get ("/", profesionalCtrl.getProfessional);
router.post ("/professional", profesionalCtrl.postProfessional);
router.put ("/professional", profesionalCtrl.putProfessional);
router.delete ("/professional", profesionalCtrl.deleteProfessional);

module.exports = router;