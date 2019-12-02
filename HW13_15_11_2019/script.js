// Методы объектов и контекст исполнения функции

// 1. Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове
//  которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.  


 var coffeeMachine = {
 	message: 'Your coffee is ready!'
 	
 };

 	coffeeMachine.start=function() {
 		for(let i =0; i<5; i++){
 			setTimeout(()=>{
 			console.log(this.message);
 		},300*i);
 		}
 		

}
 console.log(coffeeMachine.start());

// ---------------------------------------------------------------------------------------------------------         

// 2. Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

var  calculator = new Calculator();
function Calculator() {

	this.read = function() {
		this.x =12;
		this.y =2;


		//  or:
		// this.x =+prompt('x', 0);
		// this.y =+prompt('y', 0);


	};
	
	this.sum = function () {

		return this.x + this.y;
	}

	this.multi = function () {
		return this.x * this.y;
	}

	this.diff = function () {
		return this.x - this.y;
	}
	this.div = function () {
		return this.x / this.y;
	}

}

calculator.read();
alert('sum =' + calculator.sum());
alert('multi =' + calculator.multi());
alert('diff =' + calculator.diff());
alert('div =' + calculator.div());

// ------------------------------------------------------------------------------------------------------------------

// 3. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только
//  выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.

// alert(me.getSum());
// alert(me.getDiv());


let me ={

	x:12,

	y:2,

	getSum: function(){	
		return alert(`${this.x} + ${this.y} = ${Calculator.sum.call()} `);
	},

	getMulti: function(){
		return alert(`${this.x} * ${this.y} = ${Calculator.multi} `);

	},
	getDiff: function(){
		return alert(`${this.x} - ${this.y} = ${Calculator.diff} `);
	},
	getDiv: function(me){
		return alert(`${this.x} / ${this.y} = ${Calculator.div} `);
	},
};


function getCalculator (x, y){
	Calculator.call(this, x, y);
	this.read();


	this.getSum = function() {
		return alert(`${this.x} + ${this.y} = ${this.sum()} `);
	}

	this.getMulti= function() {
		return alert(`${this.x} * ${this.y} = ${this.multi()} `);
	}

	this.getDiff = function() {
		return alert(`${this.x} - ${this.y} = ${this.diff()} `);
	}
// 
	this.getDiv = function() {
		return alert(`${this.x} / ${this.y} = ${this.div()} `);
		
	};
	
}

let meNew = new getCalculator();
meNew.getSum();
meNew.getMulti();
meNew.getDiff();
meNew.getDiv();

// -----------------------------------------------------------------------------------------------------------------

// 4. Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта, содержащие поля          
// firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.

function hello(){
	alert('Hello!!! ' + this.firstname+' '+ this.lastname);
}
let userFirst ={
	firstname:'Mark',
	lastname: 'Davidov'
}
let userlast = {
	firstname:'Patrik',
	lastname: 'Kurro'
}
	

hello.call(userFirst);

hello.call( userlast);

// ------------------------------------------------------------------------------------------------------------------

// 5. Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.   
// Используйте концепцию chaining для создания цепочки вызовов.

// var current = counter.inc().inc().dec().inc().dec().getValue();

// alert(current); // 1

let  counter ={
	step: 0,
	inc() {
		this.step++;
		 return this;
	},
	dec() {
		this.step--;
		 return this;
	},
	getValue: function() {
		alert(this.step);
		 return this;
	}
}
var current = counter.inc().inc().dec().inc().dec().getValue();

 alert(current);

// -----------------------------------------------------------------------------------------------------------------

// 6. Создайте объект array с методом инициализации начального значения массива, c методами добавления, удаления последнего элемента     
//  массива и методом возврата текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.

// array
// .setValue([1])
// .push(2)
// .push(3)
// .push(3)
// .pop();

// var currentValue = array.getValue();
// console.log(currentValue); // [1, 2, 3]

let array = {
	setValue: [1],

	getValue: function(){
		this.setValue.push(2);
		this.setValue.push(3);
		this.setValue.push(3);
		this.setValue.pop();
		this.setValue.push(4);
		this.setValue.push(4);
		this.setValue.pop();
		
		return this.setValue;

	}

}

 var currentValue = array.getValue();

console.log(currentValue);


// -------------------------------------------------------------------------------------------------------------------------------

// 7. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:         

// console.log( sum(1, 2, 3, 4, 5) ); // 15
// 1)

function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}
console.log( sum(1, 2, 3, 4, 5) );

// 2)

function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log( sum(1, 2, 3, 4, 5) );

// ------------------------------------------------------------------------------------------------------------------------

// 10. Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель               
//  и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая 
//  выводит приветствие тому, кто передан в ее параметре:

// hello('World'); // Hello World
// hello('John'); // Hello John


function concat(greeting){
	return function(name){
			console.log(greeting + ' - ' + name);
	};
};
var hello = concat("Hello!");

hello('World');
hello('John');



