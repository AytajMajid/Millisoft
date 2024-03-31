// task1
// function intervaliTap(tarix1, tarix2) {
//     const birinci = new Date(tarix1);
//     const ikinci = new Date(tarix2);

//     const milliseconds = ikinci - birinci;

//     const millisecondsInDay = 1000 * 60 * 60 * 24;
//     const millisecondsInYear = millisecondsInDay * 365;

//     let il = Math.floor(milliseconds / millisecondsInYear);
//     let qaliq = milliseconds % millisecondsInYear;

//     let ay = Math.floor(qaliq / (millisecondsInDay * 30));
//     qaliq = qaliq % (millisecondsInDay * 30);

//     let gün = Math.floor(qaliq / millisecondsInDay);

//     return `${il} il ${ay} ay ${gün} gün`;
// }

// const tarix1 = "2024-03-27";
// const tarix2 = "2027-03-01";

// const interval = intervaliTap(tarix1, tarix2);
// console.log(interval);
// task2
// function gunSayisiHesabla(tarih1, tarih2) {

//   var tarih1_ms = tarih1.getTime();
//   var tarih2_ms = tarih2.getTime();

//   var fark_ms = Math.abs(tarih2_ms - tarih1_ms);

  
//   var gun_farki = Math.floor(fark_ms / (1000 * 60 * 60 * 24));

//   return gun_farki;
// }

// var tarih1 = new Date('2022-03-15');

// var tarih2 = new Date('2024-03-31');

// var gun_sayisi = gunSayisiHesapla(tarih1, tarih2);

// console.log(gun_sayisi); 
// task3
// var telebeler = [
//   { ad: "Ali", soyad: "Məmmədov", giris_bali: 60, cixis_bali: 75 },
//   { ad: "Aylin", soyad: "Soltanova", giris_bali: 55, cixis_bali: 65 },
//   { ad: "Cavid", soyad: "Qasimov", giris_bali: 45, cixis_bali: 40 },
//   { ad: "Nigar", soyad: "Əliyeva", giris_bali: 30, cixis_bali: 20 },
//   { ad: "Elvin", soyad: "İsmayilov", giris_bali: 65, cixis_bali: 60 }
// ];

// for (var i = telebeler.length - 1; i >= 0; i--) {
//   var telebe = telebeler[i];
//   var cemi_bali = telebe.giris_bali + telebe.cixis_bali;

//   if (telebe.cixis_bali < 17 || cemi_bali < 51) {
//     telebeler.splice(i, 1);
//   }
// }

// console.log(telebeler);

