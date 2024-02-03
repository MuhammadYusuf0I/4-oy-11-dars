// 1-masala


// function yangiAvtomobil(avto) {
//   const yangiAvtomobil = { ...avto };

//   yangiAvtomobil.yil += 1;

//   return yangiAvtomobil;
// }

// const avtomobil = {
//   brend: "EcoDrive Motors",
//   model: "GreenTech Pro",
//   yil: 2023,
// };

// const yangiAvtomobilObyekti = yangiAvtomobil(avtomobil);

// console.log(yangiAvtomobilObyekti);

// // 2-masala


// function Talaba(Ism, yosh, sinflar) {
//   this.Ism = Ism;
//   this.yosh = yosh;
//   this.sinflar = sinflar;
// }

// Talaba.prototype.ortachaBaho = function () {
//   let bahoJami = 0;
//   for (let i = 0; i < this.sinflar.length; i++) {
//     bahoJami += this.sinflar[i];
//   }

//   const ortachaBaho = bahoJami / this.sinflar.length;

//   return ortachaBaho;
// };

// const talaba1 = new Talaba("Ali", 20, [85, 90, 78, 92]);
// const talaba2 = new Talaba("Vali", 21, [88, 95, 82, 90]);

// console.log(talaba1.Ism + "ning o'rtacha baho:", talaba1.ortachaBaho());
// console.log(talaba2.Ism + "ning o'rtacha baho:", talaba2.ortachaBaho());

// // 3-masala


// function Shape(type, color) {
//   this.type = type;
//   this.color = color;
// }

// function Doira(radius, type, color) {
//   Shape.call(this, type, color);

//   this.shakl = "doira";
//   this.radius = radius;
// }

// function Tortburchak(uzunlik, balandlik, type, color) {
//   Shape.call(this, type, color);

//   this.shakl = "to'rtburchak";
//   this.uzunlik = uzunlik;
//   this.balandlik = balandlik;
// }

// const doira = new Doira(5, "doira", "qizil");
// console.log("Doira:", doira);

// const tortburchak = new Tortburchak(8, 4, "to'rtburchak", "yashil");
// console.log("Tortburchak:", tortburchak);

// 4 - masala;
// function BankHisob(egasi, balans) {
//   this.egasi = egasi;
//   this.balans = balans;
// }

// BankHisob.prototype.depozit = function (miqdor) {
//   if (miqdor > 0) {
//     this.balans += miqdor;
//     console.log(`Depozit qoshildi. Yangi balans: ${this.balans}`);
//   } else {
//     console.log("Salbiy miqdor kiritildi. Depozit qo'shilmadi.");
//   }
// };

// BankHisob.prototype.pulOlish = function (miqdor) {
//   if (miqdor > 0 && miqdor <= this.balans) {
//     this.balans -= miqdor;
//     console.log(`Pul olingan. Yangi balans: ${this.balans}`);
//   } else {
//     console.log(
//       "Salbiy miqdor kiritildi yoki balansdan ortiq miqdor talab qilinmoqda."
//     );
//   }
// };

// const bankHisobim = new BankHisob("John Doe", 1000);

// bankHisobim.depozit(500);

// bankHisobim.pulOlish(200);

// bankHisobim.pulOlish(2000);

// console.log(bankHisobim);


// 5 - masala;


// function Shaxs(Ism, yosh, shahar) {
//   this.Ism = Ism;
//   this.yosh = yosh;
//   this.shahar = shahar;
// }

// function shaxslarniTaqqosla(shaxs1, shaxs2) {
//   const xususiyatlar1 = Object.values(shaxs1);
//   const xususiyatlar2 = Object.values(shaxs2);

//   for (let i = 0; i < xususiyatlar1.length; i++) {
//     if (xususiyatlar1[i] !== xususiyatlar2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// const shaxs1 = new Shaxs("Ali");
// console.log(shaxs1);
