const ContactControllers = require("../controllers/contact");
const verification = require("../middlewares/verifytoken");
const router = require("express").Router();
router.use(verification.verifyToken)
router.post('/contact',ContactControllers.createcontact)
router.put('/updatecontact/:id', ContactControllers.updatecontact)
router.get('/readcontact',ContactControllers.readcontact)
router.get('/readtrash/',ContactControllers.readtrash)
router.put('/addtrash/:_id',ContactControllers.addtrash)
router.get('/readeditcontact/:_id',ContactControllers.readeditcontact)
router.put('/recovercontact/:_id',ContactControllers.recovercontact)
router.delete('/deletecontact/:_id',ContactControllers.deletecontact)
router.get('/getlabelcontacts/:labels',ContactControllers.labelcontact);
router.get('/getme',ContactControllers.getUser);
module.exports = router;