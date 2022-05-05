const { Router } = require('express');
const router = Router();

const { updateTask, getTask, getTaskById} = require('../controllers/index.controller');

router.get('/:userid/Mytasks/', getTask)
router.get('/:userid/Mytasks/:id', getTaskById)
router.put('/:userid/Mytasks/:id', updateTask)

module.exports = router;