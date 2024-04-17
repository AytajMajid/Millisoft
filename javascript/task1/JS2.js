// task1
// var reqemler = [1, 2, 3, 4, 5]
// var cem = 0
// var hasil = 1

// for (i = 0; i < reqemler.length; i++) {
//     cem += reqemler[i]
//     hasil *= reqemler[i]
// }
// console.log(cem)
// console.log(hasil)


// task2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var a = ["a", 7, "g", 5, "r", "g", 5, "y", "k", "r", 7]

// var result = a.filter((c, index) => {
// 	return a.indexOf(c) === index;
// });

// console.log(result);

// task3
// var students= [2, "Leman", 1 ,6, 8 , 3]
// var students2= []

// for(let i=0 ; i<students.length; i++){
//     if (students[i]/1) {
//         students2.push(students[i])
//     }
// }
// console.log(students2);

// task4
// function soz(ad) {
//     var result= ad.split("").reverse().join("")
//     console.log(result)
// }
// soz("); gnilimS peeK")
// task5
// function soz(ad) {
//     var result= ad.split(" ").reverse().join(" ")
//     console.log(result)
// }
// soz("Salam Muellime")

// task6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var a = Number(prompt("Eded daxil edin"))

// function test(n) {
// 	if (n < 0)
// 		return false;
// 	tek_eded = ['', 'Bir', 'Iki', 'Uc', 'Dord', 'Bes', 'Alti', 'Yeddi', 'Sekkiz', 'Doqquz']
// 	onluq = ['On', 'On bir', 'On iki', 'On uc', 'On dord', 'On bes', 'On alti', 'On yeddi', 'On sekkiz', 'On doqquz']
// 	yuzluk = ['Iyirmi', 'Otuz', 'Qirx', 'Elli', 'Altmis', 'Yetmis', 'Seksen', 'Doxsan']

// 	if (n === 0) return 'Zero'
// 	function translate(n) {
// 		word = ""
// 		if (n < 10) {
// 			word = tek_eded[n] + ' '
// 		} else if (n < 20) {
// 			word = onluq[n - 10] + ' '
// 		} else if (n < 100) {
// 			rem = translate(n % 10)
// 			word =yuzluk[(n - n % 10) / 10 - 2] + ' ' + rem
// 		} else if (n < 1000) {
// 			word = tek_eded[Math.trunc(n / 100)] + ' Yuz ' + translate(n % 100)
// 		} else if (n < 1000000) {
// 			word = translate(parseInt(n / 1000)).trim() + ' Min ' + translate(n % 1000)
// 		} else if (n < 1000000000) {
// 			word = translate(parseInt(n / 1000000)).trim() + ' Milyon ' + translate(n % 1000000)
// 		} else {
// 			word = translate(parseInt(n / 1000000000)).trim() + ' Milyard ' + translate(n % 1000000000)
// 		}
// 		return word
// 	}
// 	result = translate(n)
// 	return result.trim() + '.'
// }
// console.log("Eded = " + a)
// console.log("Soz ile: " + test(a));
// task7
// var eded=Number(prompt("Eded daxil edin:"))
//         if(eded==Math.floor(eded)){
//             console.log("tam eded")
//         } else(
//             console.log("tam eded deyil")
//         )
// task8
// var cumle = "Aytac bugun derse gecikmedi";
// var sozler = cumle.split(" ");
// var sozlerinSayi = sozler.length;

// console.log("Cümlədəki sözlərin sayı: " + sozlerinSayi);
// task9
// let cumle="                  Bu tasklar niye bele cetindir            "
// console.log(cumle.trim());
// task10
// let metn="lorem ipsum dolor sit amet consectetur, adipisicing elit."
// console.log(metn.replace("l","L"));
// task11
// let cumle1=["bir" , "iki", "uc", "dord"]
// let cumle2=["a", "b", "c" , "d"]
// for (i=0; i<cumle1.length; i++)
// for( i=0; i<cumle2.length; i++){
//     if (cumle1===cumle2) {
//         console.log("Arrayler eynidir");

//     }
//     else(
//         console.log("Eyni deyil")
//     )
// }
// task12 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var array = [5, 3, 8, 1, 2];
// var siralanmisArray = artanSira(array);
// function artanSira(arr) {
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           var temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }
//   console.log(siralanmisArray);
//   var siralanmisArray = azalanSira(array);
//   function azalanSira(arr) {
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//           var temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }
//   console.log(siralanmisArray);
// task13
// let metn="Men bu il ADNA daxil oldum.ADNA"
// console.log(metn.replaceAll("ADNA", "ADNSU"))
// task14!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function ayliqEmekHaqqi(saatliqEmekHaqqi, hafteIsciSaati) {
//     const haftalikIsciSaati = 40;
//     const haftalikIsciGun = 5;
  
//     let aylikEmekHaqqi = 0;
  
//     // Həftəlik iş saatlarının 40 saati və ya daha azı üçün
//     if (hafteIsciSaati <= haftalikIsciSaati) {
//       aylikEmekHaqqi = saatliqEmekHaqqi * hafteIsciSaati * haftalikIsciGun;
//     }
//     // Həftəlik iş saatlarının 40 saati artıq olması üçün
//     else {
//       const normalSaat = haftalikIsciSaati * haftalikIsciGun;
//       const fazlaSaat = hafteIsciSaati - haftalikIsciSaati;
//       const normalEmekHaqqi = saatliqEmekHaqqi * normalSaat;
//       const fazlaEmekHaqqi = 2 * saatliqEmekHaqqi * fazlaSaat * haftalikIsciGun;
  
//       aylikEmekHaqqi = normalEmekHaqqi + fazlaEmekHaqqi;
//     }
  
//     return aylikEmekHaqqi;
//   }
  
//   // Nümunələr
//   const saatliqEmekHaqqi = 10; // Məsələn, $10
//   const hafteIsciSaati1 = 35; // Həftəlik iş saatı 35
//   const hafteIsciSaati2 = 45; // Həftəlik iş saatı 45
  
//   const aylikEmekHaqqi1 = ayliqEmekHaqqi(saatliqEmekHaqqi, hafteIsciSaati1);
//   const aylikEmekHaqqi2 = ayliqEmekHaqqi(saatliqEmekHaqqi, hafteIsciSaati2);
  
//   console.log("35 saat üçün aylıq əmək haqqı:", aylikEmekHaqqi1);
//   console.log("45 saat üçün aylıq əmək haqqı:", aylikEmekHaqqi2);  
// task15
// var eded = 245

// function Sum(num) {
// 	var split = num.toString().split("")
// 	var result = 0

// 	for (let i = 0; i < split.length; i++) {
// 		var el = Number(split[i])
// 		result = result + el
// 	}
// 	return result
// }

// console.log(Sum(eded));
// task16!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function ardiciSozlukEmsali(metn1, metn2, n) {
//     // Mətnləri sözlərə böl
//     const sozler1 = metn1.split(' ');
//     const sozler2 = metn2.split(' ');
  
//     // Ardıcıl sözlər dizini yarat
//     const dizin1 = [];
//     const dizin2 = [];
//     for (let i = 0; i < sozler1.length - (n - 1); i++) {
//       dizin1.push(sozler1.slice(i, i + n).join(' '));
//     }
//     for (let i = 0; i < sozler2.length - (n - 1); i++) {
//       dizin2.push(sozler2.slice(i, i + n).join(' '));
//     }
  
//     // Ardıcıl sözlər eyniliyini yoxla
//     let eyniSozler = 0;
//     for (const soz of dizin1) {
//       if (dizin2.includes(soz)) {
//         eyniSozler++;
//       }
//     }
  
//     // Əmsalı hesabla
//     const emsal = (2 * eyniSozler) / (dizin1.length + dizin2.length);
  
//     return emsal;
//   }
  
//   // Nümunələr
//   const metn1 = "Bu gün hava çox gözəldir və günəşli";
//   const metn2 = "Gün hava çox gözəldir və yağmurlu bir gün ola bilər";
  
//   const emsal3 = ardiciSozlukEmsali(metn1, metn2, 3);
//   console.log("3 sözlük əmsali:", emsal3);
// task17!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function tekrarlananSozlerinSayi(metn) {
//     // Mətni sözlərə bölmək
//     const sozler = metn.toLowerCase().split(/\W+/);
  
//     // Sözlərin sayını hesablamaq üçün obyekt yaradırıq
//     const sozSayi = {};
  
//     // Sözlərin sayını saymaq
//     for (const soz of sozler) {
//       if (soz in sozSayi) {
//         sozSayi[soz] += 1;
//       } else {
//         sozSayi[soz] = 1;
//       }
//     }
  
//     // Təkrarlanan sözlərin sayını hesablamaq
//     let tekrarlananSayi = 0;
//     for (const soz in sozSayi) {
//       if (sozSayi[soz] > 1) {
//         tekrarlananSayi++;
//       }
//     }
  
//     return tekrarlananSayi;
//   }
  
//   // Nümunə
//   const metn = "Bu gün hava çox gözəldir. Gün hava açıqdır və günəşli. Çox gözəldir hava.";
//   const tekrarlanan = tekrarlananSozlerinSayi(metn);
//   console.log("Təkrarlanan sözlərin sayı:", tekrarlanan);
  







