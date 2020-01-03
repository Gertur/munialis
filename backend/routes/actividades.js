const Router = require('express');
const router = Router();
const {getActividades,createActividad,deleteActividad,getActividad} = require('../controllers/actividadesControllers');
router.route('/')
    .get(getActividades)
    .post(createActividad)

router.route('/:id')
    .delete(deleteActividad)
    .get(getActividad)
module.exports = router;