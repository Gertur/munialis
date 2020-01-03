const Router = require('express');
const router = Router();
const {getNoticias,createNoticias,getLastNoticias,getNoticia,deleteNoticia} = require('../controllers/noticiasControllers');

router.route('/')
    .get(getNoticias)
    .post(createNoticias)
    
router.route('/:id')
    .get(getNoticia)
    .delete(deleteNoticia)
    
router.route('/last/lastnoticia/')
    .get(getLastNoticias)    
module.exports = router;