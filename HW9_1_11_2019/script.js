// 1. Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
//  С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
//  Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.



var person = {
 	firstN:'Вася',
 	lastN: 'Петров',
 	age: 30,
 	height: 190,
 	eyes: 'blue',
 	married: '',
 	children: ''

 };

 for (key in person) {
 	prompt(key, person [key] );
 }



 // 2. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
 //  прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные.
 //  Добавьте этот гаджет персоне, созданной ранее.



 obj = {
 	displey: 6.39,
 	type: '	amoled',
 	weight: '173 g',
		memory: '',
		color: 'violet',
	 	price: 10500
 };

 if ( obj !== undefined) {
 	 prompt( Object.keys (obj));
 }
// prompt( person [obj] );

var obj2 = Object.assign(obj, person);
console.log(obj2);
prompt (obj2);

// 3. Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update.
//  В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). 
//  Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. 
//  При нажатии на Отмена при появлении prompt редактирование person заканчивается.
//  И обновленные данные распечатываются в консоли.


  	
 delete obj2.color;

  console.log(obj2);

  	for (var key in obj2) {
	prompt(' update','Владлен')
};


 obj2 = {
	firstN:'Владлен'
};

console.log(obj2);

// 4. Динамически (скриптом) создайте HTML элемент <dl>. 
// Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства.

var listElement = document.createElement('dl');
document.body.appendChild(listElement);

for (var key in person) {

	let titleElement = document.createElement('dt');
	listElement.appendChild(titleElement);
	titleElement.innerText = key;
	
	let defElement = document.createElement('dd');
	listElement.appendChild(defElement);
	defElement.innerText = person[key];
}


 