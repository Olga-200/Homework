
// 1. Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый 
// объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename.
//  Используя встроенные функции массивов:	

// + Отфильтруйте пользователей младше 18 лет

// + Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если
//   есть все три, и только firstname и lastname, если middlename нет

// + Сформируйте новый массив, который содержит только полное имя пользователей

// var users = [
// { firstname: 'Ivan', lastname: 'Kovalenko', age: 11 },
// { firstname: 'Igor', lastname: 'Petrenko', age: 32 },
// { firstname: 'Maria', lastname: 'Kuro', age: 11, middlename:'Andreevna'},
// { firstname: 'Phodor', lastname: 'Pupkin', age: 29 },
// { firstname: 'Stepan', lastname: 'Ivanov', age: 47 },
// { firstname: 'Daniil', lastname: 'Shevchenko', age: 13 },
// { firstname: 'Bella', lastname: 'Grineva', age: 23, middlename:'Vladimirovna'},
// { firstname: 'Vlad', lastname: 'Tarasov', age: 34 },
// { firstname: 'Roman', lastname: 'Petrov', age: 14 },
// { firstname: 'Sofia', lastname: 'Kovaleva', age: 9 },
// { firstname: 'Vlad', lastname:'Grinev', age: 54 },
// { firstname: 'Violla', lastname: 'Malinovskaia', age: 20, middlename: 'Sergeevna'}
 
// ];
// console.log(users);

// var newUsers = [];
// for (let i =0; i<users.length; i++) {
// 	if (users[i].age < 18) {
// 		newUsers.push(users[i])
// 	}
// }
// console.log(newUsers);


// var newUs = users.filter(users => users.age < 18)
// console.log(newUs);


// users.forEach(function(person, index, usArr) {
// 	var ageMin = person.age < 18;
// 	console.log(person.age,ageMin);
// 	// console.log(index )
// 	// console.log(usArr);
// })



// + Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если
//   есть все три, и только firstname и lastname, если middlename нет

// var fullName = users.map(users =>{

// 	if (users.middlename===undefined)
// 		return `${ users.firstname} ${users.lastname}`;
// 	else
// 	return `${ users.firstname} ${users.lastname} ${users.middlename}`;

// })

// console.log(`${fullName}`);



// function myAssign(fullName, ...users) {
//   users.forEach(users => {
//     Object.defineProperties(fullName, Object.keys(users).reduce((fullName, key) => {
//      fullName[key] = Object.getOwnPropertyDescriptor(users, key);
//       return fullName;
//     }, {}));
//   });
//   return users;
// }

// var copy = myAssign ({}, users,fullName ); 
// console.log(copy);




// + Сформируйте новый массив, который содержит только полное имя пользователей





// --------------------------------------------------------------------------------------------------------------------------

// 2. Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

// console.log( cube(2) ); // 8

// 1)

// function cube(num) {

// num = 2; 
// var stepen = 3;
// var result = 1;


// for (var i = 0; i < stepen; i++) {
// 	result *= num;
// }
// return result;
// }
// console.log(cube());

// 2)

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = +prompt("x?", 0);
// let n = 3;

// if (n < 1) {
//   console.log(`${n}`);
// } else {
//   console.log( pow(x, n) );
// }


// ---------------------------------------------------------------------------------------------------------------------------------

// 3. Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив 
// числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от типа входящего параметра (typeof).
//  Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.

// console.log( extraCube(2) ); // 8
// console.log( extraCube([0, 1, 2, 3]) ); // [0, 1, 8, 27]


 
// function extraCube(num /* number | Array<number> */) {

//     if(num instanceof Array) return num.map(cube); 
//     return cube(num);

// }

// var extraCube =(num) => num = num==0||+num ? num*num*num : num.map((num) => num*num*num);


// console.log(extraCube(2));

// console.log(extraCube([0, 1, 2, 3]));

// --------------------------------------------------------------------------------------------------------------------

// 4. Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает с помощью prompt 
// вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением - определяет callback

// ask('How old are you?', '10', function(response) {
// 	console.log(response);
// });

// function responseCall() {
// 	console.log(quest);
// }


// function response() {
// 	console.log('many years? )))))');
// }



// function ask(question, defaultValue, callback) {

// quest = prompt('How old are you?', 0);

// 	if( quest===null) {
// 		response();
// 	}else if (callback){
// 		responseCall();

// 	}

// }

// ask(response, responseCall,8);

// --------------------------------------------------------------------------------------------------------------

// 5. Создайте объект, описывающий html-разметку. Напишите функцию, которая добавляет разметку в произвольный контейнер на странице.

// <section id="methods">
// 	<article>
// 		<h1>Array.prototype.every()</h1>
// 		<p>Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.</p>
// 	</article>

// 	<article>
// 		<h1>Array.prototype.some()</h1>
// 		<p>Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.</p>
// 	</article>

// 	<article>
// 		<h1>Array.prototype.reduce()</h1>
// 		<p>Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.</p>
// 	</article>

// 	<article>
// 		<h1>Array.prototype.reduceRight()</h1>
// 		<p>Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.</p>
// 	</article>
// </section>


// let sectionElement = document.createElement('section','#methods');
// document.body.appendChild(sectionElement);

// for (let box = 0; box <6; box++){

// let articleElement = document.createElement('article');
// sectionElement.appendChild(articleElement) ;

// let h1Element = document.createElement('h1');
// articleElement.appendChild(h1Element ) ;

// let pElement = document.createElement('p');
// articleElement.appendChild(pElement ) ;

//  h1Element.innerText = ('Array.prototype.every()');
//  pElement.innerText = ('Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.');
// }


// ----------------------------------------------------------------------------------------------------------------

// 6. Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все 
// элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте метод every или some

// console.log( checkNumber([1, 2, '3', 'a']) ); // false
// console.log( checkNumber([1, 2, '3', '4']) ); // true

// let checkNumber = [1, 2, '3', 'a'];
// let checkNumbeRRR = [1, 2, '3', '4'];

// console.log( checkNumber.every(item => typeof(item) ==='number'));
// console.log( checkNumbeRRR.some(item => typeof(item) ==='number'));

// Замыкания

// 2. Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр 
// и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry

// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10



// function createAdder(firstName) {
// 	firstName = 'Hello'
// 	function getName() {
// 		return firstName + ", ";
		
// 	}
// 	alert(getName() + "John");
// 	alert(getName() + "Harry");
// }

// console.log(createAdder());


// function createAdd(plus) {
// 	 plus =5;
// 	 let num =+prompt('number', 0)
// 	function pluSS() {
// 		 return `${plus} + ${num}= ${plus + num}` ;
		
// 	}
// 	alert( pluSS( ));
// }
// console.log(createAdd());

