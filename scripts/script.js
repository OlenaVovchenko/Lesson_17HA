//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function num(a, b) {
    
//     if (a < b) { return a;        
//     }
//     else {
//     return b;
// }
// }
// let result = num(7, 9)
// console.log(result);

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// function num(a, b) {
// let more
// let smaller
// if (a > b) {
//     more = a
//     smaller = b
    
// }else {more = b
//     smaller = a}
//     if (more % 2 !== 0 ) {
//         more = more - 1
//     }
//     for (let i = more; i >= smaller; i-=2) {
//       console.log(i);
        
//     }
//     }
// num(7, 90)

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power(a, b = 2) {
//        return a**b
     
//     }
//     console.log (power(4, 4));
//     console.log(power(4));

//     Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function zahl(n) {
//  let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i
        
//     }
//     return sum
// }
// let result = zahl (8)
// console.log(result);

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
// function num(n, m) {
//     let even = 0
//     let odd = 0
        
//     for (let i = n; i <= m; i++) {
//         if (i % 2 ===0 ) { 
//             even = even + i         
//         } else {odd = odd + i}
        
//     }
    
//     return {even, odd}
      
// }
// let zahl = num (8, 20)
// console.log("Сумма четных чисел:",zahl.even);
// console.log("Сумма нечетных чисел:", zahl.odd);

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
// function string(stringsArray) {
//     if (stringsArray.length === 0) {
//         return null
//     }
//     let longestString = stringsArray[0]
//     let maxlength =longestString.length
// for (let i = 0; i < stringsArray.length; i++) {
//     if (stringsArray[i].length>maxlength) {
//         longestString = stringsArray[i]
//         maxlength = stringsArray[i].length
//     }
    
// }
//     return longestString
// }
// console.log(string([`one`, `two`, `three`]));

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// let sum = 0
// for (let i = 0; i <= 50; i++) {
//    if (i%5===0) { sum= sum+i
//     }
//  }
//  console.log(sum);
 
// Написать цикл, который выводит только названия товаров
// const goods = [
//    {
//        id: 1,
//        title: "bicycle",
//        price: 45000,
//        discount: 10
//    },
//    {
//        id: 2,
//        title: "roller-skates",
//        price: 15000,
//        discount: 5
//    },
//    {
//        id: 3,
//        title: "kick scooter",
//        price: 10000,
//        discount: 30
//    },
//    {
//        id: 4,
//        title: "skis",
//        price: 25000,
//        discount: 10
//    },
//    {
//        id: 5,
//        title: "skate",
//        price: 10000,
//        discount: 0
//    }
//  ]

//  for (let i = 0; i < goods.length; i++) {
//    const { title } = goods[i];
//    console.log(`Название товара: ${title}`);
//  }
// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
// const goods = [
//    {
//        id: 1,
//        title: "bicycle",
//        price: 45000,
//        discount: 10
//    },
//    {
//        id: 2,
//        title: "roller-skates",
//        price: 15000,
//        discount: 5
//    },
//    {
//        id: 3,
//        title: "kick scooter",
//        price: 10000,
//        discount: 30
//    },
//    {
//        id: 4,
//        title: "skis",
//        price: 25000,
//        discount: 10
//    },
//    {
//        id: 5,
//        title: "skate",
//        price: 10000,
//        discount: 0
//    }
//  ]
//  for (let i = 0; i < goods.length; i++) {
//     let priceMitDiskount = goods[i].price -(goods[i].price * goods[i].discount / 100)
//          console.log(`название: ${goods[i].title}, цена со скидкой: ${priceMitDiskount}`);
//      }
  
//<название> (<цена со скидкой>)

// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).
const goods = [
   {
       id: 1,
       title: "bicycle",
       price: 45000,
       discount: 10
   },
   {
       id: 2,
       title: "roller-skates",
       price: 15000,
       discount: 5
   },
   {
       id: 3,
       title: "kick scooter",
       price: 10000,
       discount: 30
   },
   {
       id: 4,
       title: "skis",
       price: 25000,
       discount: 10
   },
   {
       id: 5,
       title: "skate",
       price: 10000,
       discount: 0
   }
 ]
 function eaxpensive(goods) {
   if (goods.length === 0) {
      return null      
   }
   let res = goods[0]
   for (let i = 1; i < goods.length; i++) 
   {if (goods[i].price > res.price) {
      res = goods[i]
    }
 }
  

   return res
   
   
 }
 let res = eaxpensive(goods)
 console.log(res);
 