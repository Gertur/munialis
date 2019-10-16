const Router = require('express');
const router = Router();
const {getNoticias,createNoticias,deleteNoticia,getLastNoticia} = require('../controllers/noticiasControllers');

router.route('/')
    .get(getNoticias)
    .post(createNoticias)

router.route('/:id')
    .delete(deleteNoticia)

router.route('/last')
    .get(getLastNoticia)
module.exports = router;