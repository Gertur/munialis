const Router = require('express');
const router = Router();
const {getCentenario,createCentenario} = require('../controllers/centenarioControllers');

router.route('/')
    .get(getCentenario)
    .post(createCentenario)
      
module.exports = router;