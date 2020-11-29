var express = require('express');
var router = express.Router();
var ctrlMekanlar=require('../controllers/mekanlar');
var ctrlDigerleri=require('../controllers/digerleri');

router.get('/', ctrlMekanlar.anaSayfa);
router.get('/Starbucks', ctrlMekanlar.mekanBilgisi);
router.get('/abdulcanbaz_book_&_vintage_cafe', ctrlMekanlar.mekanBilgisi);
router.get('/burc_firin', ctrlMekanlar.mekanBilgisi);
router.get('/alacati_muhallebicisi', ctrlMekanlar.mekanBilgisi);
router.get('/gramafon_box_cafe', ctrlMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);
module.exports = router;
