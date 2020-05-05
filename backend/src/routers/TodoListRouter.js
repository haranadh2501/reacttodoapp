const express =require('express');
const router = express.Router();

//importing controllers
const todoListController = require('../controllers/todoListController')
//router.get('/test',todoListController.test);
//router.get('/testdata',todoListController.testdata );
//router.get('/list',todoListController.list );
router.get('/list', todoListController.list);
router.post('/create',todoListController.create);
router.get('/get/:id',todoListController.get);
router.post('/update/:id', todoListController.update);
router.post('/delete',todoListController.delete);
router.get('/save', (req, res) => {
  res.json({status: 'TodoList Saved'});

});

module.exports = router;