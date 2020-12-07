var footer="Ahmet Bilgehan KARACA 2020"
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste', 
  	{
      'baslik': 'Anasayfa',
      'footer':footer,
  	'sayfaBaslik':{
  		'siteAd':'Mekan32',
  		'aciklama':'Isparta Civarındaki Mekanları Keşfedin!'
  	},
    'mekanlar':[
    {
      'ad':'Starbucks',
      'adres':'Centrum Garden AVM',
      'puan':4,
      'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
      'mesafe':'10km'
    },
      {
      'ad':'Abdulcanbaz Book & Vintage Cafe',
      'adres':'Modern Evler, 160. Cd. No:8, 32200 Isparta Merkez/Isparta',
      'puan':4,
      'imkanlar':['Dünya Kahveleri','Sıcak Çikolatalar','Pastalar'],
      'mesafe':'1km'
    },
    {
      'ad':'Burç Fırın',
      'adres':'Modern Evler, Şht. Astsubay Yaşar Topçu Cd. No:127, 32200 Isparta Merkez/Isparta',
      'puan':5,
      'imkanlar':['Tatlılar','Kahvaltılar','Yemekler'],
      'mesafe':'1km'
    },
    {
      'ad':'Alaçatı Muhallebicisi',
      'adres':'İyaş Market',
      'puan':3,
      'imkanlar':['Dünya Kahveleri','Muhallebiler','Pastalar'],
      'mesafe':'1km'
    },
    {
      'ad':'Gramafon Box Cafe',
      'adres':'Kutlubey, Kutlubey MAH. 1004 Sok, Kafeler Caddesi No:9/a, 32100 Isparta Merkez/Isparta',
      'puan':4,
      'imkanlar':['Dünya Kahveleri','Tatlılar','Yemekler'],
      'mesafe':'1km'
    },
    ]
  }

  	);
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', 
    { 
    'baslik': 'Mekan Bilgisi',
    'footer':footer,
    'sayfaBaslik':'Starbucks',
    'mekanBilgisi':{
      'ad':'Starbucks',
      'adres':'Centrum Garden AVM',
      'puan':4,
      'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
      'koordinatlar':{
          'enlem':'37.781885',
          'boylam':'30.566034'
      },
      'saatler':[
        {
          'gunler':'Pazartesi-Cuma',
          'acilis':'7:00',
          'kapanis':'23:00',
          'kapali':false
        },
        {
          'gunler':'Cumartesi',
          'acilis':'9:00',
          'kapanis':'22:00',
          'kapali':false
        },
        {
          'gunler':'Pazar', 
          'kapali':true
        }
      ],
      'yorumlar':[
        {
          'yorumYapan':'Ahmet Bilgehan KARACA',
          'puan':4,
          'tarih':'27.11.2020',
          'yorumMetni':'Kahveleri güzel.'
        },
        {
          'yorumYapan':'Bengisu Üründü',
          'puan':2,
          'tarih':'27.11.2020',
          'yorumMetni':'Adımı Bengüsü Yazdılar.'
        }
        
      ]

    }
  }
    );
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}