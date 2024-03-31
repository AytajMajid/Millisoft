// task1
// let ededler= [1, 2, 3, 4, 5]
// for (i=0; i<ededler.length; i++){
//    if (i%2===0) {
//     console.log(ededler[i])
//    }
// }
// task2
// let ededler= [5, 25, 17, 10, 36, 40]
// let say=0
// for (i=0; i<ededler.length; i++){
// if (ededler[i]%5==0){ 
//     say++
// }
// }
// console.log(say)
// task3
// var eded= Number(prompt("Eded daxil edin"))
// var bolen = 0
// for (i=2 ; i<eded; i++){
//     if (eded%i==0){
//       bolen++
//     }
// }
// if(bolen<2){
//     console.log("bu eded sadedir")
// }
// else{
//     console.log("bu eded murekkebdir")
// }
// task4
// let eded=[ 21 , 7, 12, 70]
// let bos=[]
// for(i=0; i<eded.length; i++){
//     if(eded[i]%7===0)
//     bos.push(eded[i])
// }
// let sonuncuYediyebolen = bos[bos.length - 1]; 
// console.log("7-ə tam bölünən sonuncu ədəd:", sonuncuYediyebolen);
// task5
// let ededler=[2 , 10 , 20 ,4 ,8 ,30 ]
// let boyuk = ededler[0];
// for (i = 1; i < ededler.length; i++) {
//     if (ededler[i] > boyuk) {
//         boyuk = ededler[i];
//     }
// }
// let kicik = ededler[0];
// for (let i = 1; i < ededler.length; i++) {
//     if (ededler[i] < kicik) {
//         kicik = ededler[i];
//     }
// }
// console.log("en boyuk eded:", boyuk);
// console.log("en kicik eded:", kicik);
// task6
// let ededler=[2 , 10 , 20 ,4 ,8 ,30 ]
// let boyuk = ededler[0];
// let boyukindex=0;
// for (i = 1; i < ededler.length; i++) {
//     if (ededler[i] > boyuk) {
//         boyuk = ededler[i];
//         boyukindex = i;
//     }
// }
// let kicik = ededler[0];
// let kicikindex=0;
// for (let i = 1; i < ededler.length; i++) {
//     if (ededler[i] < kicik) {
//         kicik = ededler[i];
//         kicikindex = i;
//     }
// }

// let temp = ededler[boyukindex];
// ededler[boyukindex] = ededler[kicikindex];
// ededler[kicikindex] = temp;

// console.log(ededler);
// task7
// let daxilolunan=Number(prompt("Eded daxil edin"))
// for(i=1; i<=daxilolunan; i++){
//     if (daxilolunan%i===0){
//         console.log(i);
//     }
// }
// task8
// var eded = [5, 54, 2, 8, 22, 3, 10]

// function Random(array) {
// 	var result = array[Math.floor(Math.random() * array.length)];
// 	return result
// }
// console.log(Random(eded));
// task9
// Method1
// var result=[]
//     for (i=1 ; i<=100 ; i++){
//         var ededler= i.toString().split("")
//         if (ededler[ededler.length -1]== 1) {
//             result.push(Number(ededler.join("")))
//         }
//     }
// console.log(result)
// Method2
// for(i=1; i<100 ; i++){
//    if(i%10==1) {
//     console.log(i);
// }
// }
// task10
// var eded = prompt("Eded daxil edin")
// var cevrilmis = eded.split("").reverse().join("")
// if (eded==cevrilmis){
//     console.log("Polindromdur")
// }
// else{
//     console.log("Polindrom deyil")
// }
// task11
// var a1 = prompt("Birinci sozu daxil edin")
// var a2 = prompt("Ikinci sozu daxil edin")

// var sorteda1 = a1.split("").sort().join("")
// var sorteda2 = a2.split("").sort().join("")

// if(sorteda1==sorteda2){
//     console.log("Anagramdir");
// }
// else{
//     console.log("Anagram deyil");
// }
// task12
// var a1=[2, 5 , 6]
// var a2= [3, 5 , 8]
// for(i=0 ; i<a1.length; i++){
//     console.log(a1[i]*a2[i]);
// }
// task13
// Method1
// var metn = prompt("Metni daxil edin")
// function Deleted(text) {
//     var saitler = ["a", "ı", "o", "u", "e", "ə", "i", "ö", "ü"]
//     var splited = text.split("")
//     for (i = 0; i < saitler.length; i++) {
//         for (j = 0; j < splited.length; j++) {
//             if (saitler[i] == splited[j]) {
//                 splited.splice(j, 1)
//             }
//         }
//     }
//     console.log(splited.join(""));
// }
// Deleted(metn)
// method2
// var soz="salam"
// console.log(soz.replace(/[aioue]/gi,""));
// task14
// var a = Number(prompt("Eded daxil edin"))

// function RandomString(num) {
// 	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// 	var result = ' ';
// 	const charactersLength = characters.length;

// 	for (let i = 0; i < num; i++) {
// 		result += characters.charAt(Math.floor(Math.random() * charactersLength));
// 	}

// 	return result;
// }
// console.log(RandomString(a));
// task15
// var ededler=[5, 8, 3, 4]
// var cem=0
// for(i=0; i<ededler.length; i++){
//     cem+=ededler[i]
// }
// console.log(cem/ededler.length)
// task16!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var metn = prompt("Metni daxil edin")
// function Deleted(text) {
//     var saitler = ["a", "ı", "o", "u", "e", "ə", "i", "ö", "ü"]
//     var splited = text.split("")
//     for (i = 0; i < saitler.length; i++) {
//         for (j = 0; j < splited.length; j++) {
//             if (saitler[i] == splited[j]) {
//                 splited.splice(j, 1)
//             }
//         }
//     }
//     console.log(splited.join(""));
// }
// task17
// var cem=0
// var eded=6
// for (i=0; i<eded; i++){
//     if(eded%i==0){
//         cem+=i
//     }
// }
// if(cem==eded){
//     console.log("m");
// }
// else{
//     console.log("m deyil");
// task18
// var eded=(Number(Promt("Eded daxil edin")))
// var cem=0
// var eded=input.toString().split("")
// for(i=0; i<eded.length; i++){
// cem+= +eded[i]                             
// }
// console.log(cem);
// task19
// var input = "Hello"
// function cussubstring(str,start,end) {
// var netice=""
// for(i=start; i<end && i<str.length; i++){
//     netice+=str[i]
// }
// console.log(netice);
// }
// task20
// var input="salam"
// var herf="m"
// let harfler = input.split("")
// for(i=0; i<harfler.length; i++){
//     if(harfler[i]==herf){
//         console.log(i);
//     }
// }


