var express = require('express');
var router = express.Router();
var quizController = require("../controllers/mod6_p2p_controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QUIZ - Módulo 6' });
});

/*  Rutas: GET /quizes/question y GET /quizes/answer */
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
