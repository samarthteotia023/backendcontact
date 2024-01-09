const multer=require('multer')
const storage = multer.memoryStorage();
const fileHandler = multer({
  storage,
  limits: {
    fileSize: 1 * 1024 * 1024, // limiting files size to 1 MB
  },
});
const middlewares={
    fileHandler
}
module.exports=middlewares