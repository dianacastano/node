const {Router} = require ("express")
const router = Router();
const profesionalCtrl1 = require ("../controller/profesional1.controller")

router.get ("/", profesionalCtrl1.getProfessional1);
router.post ("/professional1", profesionalCtrl1.postProfessional1);
router.put ("/professional1", profesionalCtrl1.putProfessional1);
router.delete ("/professional1", profesionalCtrl1.deleteProfessional1);

module.exports = router;