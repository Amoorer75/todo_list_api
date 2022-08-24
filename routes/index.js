const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root!'))
router.post('/listitems', controllers.createItem)
router.get('/listitems', controllers.getAllItems)
router.put('/listitem/:id', controllers.updateItem)
router.delete('/listitems/:id', controllers.deleteItem)

module.exports = router; 