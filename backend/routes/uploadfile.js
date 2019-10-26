const Router = require('express');
const router = Router();
const {createUploadFile} = require('../controllers/uploadfile');
router.route('/')
    .post(createUploadFile)

module.exports = router;