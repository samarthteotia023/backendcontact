const router = require("express").Router();
const LabelControllers = require("../controllers/labels");
const verification = require("../middlewares/verifytoken");
router.use(verification.verifyToken)
router.post('/createlabel',LabelControllers.createLabel)
router.get("/getalllabels",LabelControllers.getAllLabels)
router.put('/updatelabel/:_id',LabelControllers.updatelabel);
router.delete('/deletelabel/:_id',LabelControllers.deletelabel)
router.get('/labelbyid/:_id',LabelControllers.getlabelbyid)
module.exports = router;