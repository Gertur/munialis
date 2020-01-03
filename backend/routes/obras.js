const Router = require('express');
const router = Router();

const {getObras, createObras, deleteObras, getObra} = require('../controllers/obrasControllers');

router.route('')
    .get(getObras)
    .post(createObras)

router.route('/:id').delete(deleteObras).get(getObra)

module.exports = router;