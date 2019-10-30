const Router = require('express');
const router = Router();
const {getNoticias,createNoticias} = require('../controllers/noticiasControllers');

router.route('/')
    .get(getNoticias)
    .post(createNoticias)

// router.route('/:id')
//     .delete(deleteNoticia)

// router.route('/last')
//     .get(getLastNoticia)
module.exports = router;