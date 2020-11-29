
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste', { title: 'Anasayfa' });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', { title: 'Mekan Bilgisi'});
}

const abdulcanbaz=function(req, res, next) {
  res.render('mekan-abdul', { title: 'Mekan Abdulcanbaz'});
}

const burcfırın=function(req, res, next) {
  res.render('mekan-burc', { title: 'Mekan Burc'});
}

const alacatı=function(req, res, next) {
  res.render('mekan-alacatı', { title: 'Mekan Alacatı'});
}

const gramafonbox=function(req, res, next) {
  res.render('mekan-gramafonbox', { title: 'Mekan Gramafon Box'});
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
abdulcanbaz,
burcfırın,
alacatı,
gramafonbox,
yorumEkle
}