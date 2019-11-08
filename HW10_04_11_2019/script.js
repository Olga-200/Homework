// 1. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.



// var arr = [4, 2, 19, 3, 7, 1, ' ououou ', 6, 5, ' 2 aaaaa'];
// var sum = 0;

// console.log(arr.sort(function(a, b) {return b-a}));

// for (i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// alert(sum);



// 2. Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. 
// Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень.
//  Для возведения в степень используйте вложенный цикл (НЕ метод Math.pow(), НЕ оператор **).


// var mult = [2.12, 3.14, 5.22];

// let stepen = 5;
// let result = 1;


// for (key in mult ) {
// 	console.log(`${mult[key] * mult[key] * mult[key] * mult[key] * mult[key]}`);
// }

// // 2)
// 		for (i = 0; i < stepen; i++) {
// 		result = result * mult [0];
// 	}
// 	 console.log(result);
// 	for (i = 0; i < stepen; i++) {
// 		result = result * mult [1];
// 	}
// 	 console.log(result);
// 	for (i = 0; i < stepen; i++) {
// 		result = result * mult [2];
// 	}
// 	 console.log(result);



// 4. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”    


// var framework = ['AngularJS', 'jQuery'];

// console.log(framework);

// var back = framework.unshift('Backbone.js');

// var React = framework.push('ReactJS', 'Vue.js');

// var Common = framework.splice(2, 0, 'CommonJS');

// var all = framework.splice(3, 1);

// console.log(back);

// console.log(React);

// console.log(Common);

// console.log(all);

// alert(all + " Это здесь лишнее");



// 5. Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’.
//  Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). 
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.


// var allString = 'Как; однажды; Жак; звонарь; сломал ;городской;  фонарь';

// console.log(allString);

// var jo = /\s*;\s*/;
// var nameString  =  allString.split(jo);

// console.log(nameString);

// var change = nameString.splice(4, 0, 'городской');

// var change2 =  nameString.splice(5, 0, 'сломал');

// var change3 =  nameString.splice(6, 0, 'фонарь');

// var change4 = nameString.splice(7);

// console.log(nameString .join(' '));

// alert('Исходный вариант: ' + allString );
// alert('Итоговый вариант: ' + nameString .join(' '));


// 6. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения.
//  После того, как таблица сгенерирована, распечатайте значение в консоли:

// let b =[
// 	[1],
// 	[2],
// 	[3],
// 	[4],
// 	[5],
// 	[6],
// 	[7],
// 	[8],
// 	[9]
	
// ];
// // console.log(b);

// for (i =1; i < 10; i++) {
// 	let c = b[i]; 
// 	for (let k =1; k <10; k++) {
// 		console.log(`${b[k]} * ${i} = ${b[k] * i}`);
// 	}
// }