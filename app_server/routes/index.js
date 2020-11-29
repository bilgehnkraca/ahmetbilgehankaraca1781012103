var express = require('express');
var router = express.Router();
var ctrlMekanlar=require('../controllers/mekanlar');
var ctrlDigerleri=require('../controllers/digerleri');

router.get('/', ctrlMekanlar.anaSayfa);
router.get('/Starbucks', ctrlMekanlar.mekanBilgisi);
router.get('/abdulcanbaz_book_&_vintage_cafe', ctrlMekanlar.abdulcanbaz);
router.get('/burc_firin', ctrlMekanlar.burcfırın);
router.get('/alacati_muhallebicisi', ctrlMekanlar.alacatı);
router.get('/gramafon_box_cafe', ctrlMekanlar.gramafonbox);
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);
module.exports = router;
