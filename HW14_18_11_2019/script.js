// ООП в функциональном стиле

// Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. На базе класса Figure создайте три
//  класса – Line, Rect, Circle, каждый из которых создает соответствующую фигуру. Пример создания
//   экземпляров каждого класса и параметры фигур:

// var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
// var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
// var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

// Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими параметрами (координаты, размеры, цвет).

// Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один класс – Canvas, в котором инициализируется 
// элемент <canvas> из DOM. Класс Canvas – final, он не наследуется. В этом классе есть метод add, который и отображает
//  созданные вами фигуры на странице. Обратите внимание, добавлять фигуры на канвас можно как по отдельности, так и списком. Также у 
//  класса есть свойства width и height, которые можно передать при вызове конструктора и которые меняют размер элемента canvas в html. Если 
//  в конструктор не передать значения для ширины/высоты, то элементу canvas устанавливаются значения по умолчанию

// var drawArea = new Canvas('canvasID');
// drawArea.add(line);
// drawArea.add(circle, rect);

// // <canvas id="canvasID"></canvas>

// // Творчество не ограничено. Базовые возможности вашей программы:
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// ctx.fillRect(20, 30, 50, 90);


   var ctx = canvas.getContext('2d');

function Figure(x, y, color) {
	this._x=x;
    this._y=y;
    this._color=color;
}

function Line(x, y, x2, y2, color) {
	 Figure.apply(this,[x, y, color]);
	 this._x2=x2;
     this._y2=y2;

Line.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.moveTo(this._x, this._y);
  ctx.lineTo(this._x2, this._y2);
  ctx.strokeStyle = this._color;
  ctx.stroke();
  }
 }

function Rect(x, y, w, h, color) {
	Figure.apply(this,[x, y, color]);
	 this._w=w;
     this._h=h;


 Rect.prototype.draw = function(ctx){
 ctx.beginPath();
 ctx.fillRect(x, y, w, h);
 }

}

function Circle(x, y, r, color) {
	Figure.apply(this,[x, y, color]);
	 this._r=r;

	 Circle.prototype.draw = function(ctx) {
	 ctx.beginPath();
	 ctx.arc(x, y, r, 0, 2 * Math.PI);
	 ctx.strokeStyle = color;
	 ctx.stroke();

	 }
	
}


function Canvas(add){

  var add=document.getElementById('canvas');
  this._ctx = add.getContext("2d");
  add.height = 400;
  add.width  = 500;


Canvas.prototype.add = function(){
    var ctx = this._ctx;

    [].forEach.call(arguments, function(add) {
           add.draw(ctx);
           return;
 
  });

}
}

var drawAray = new Canvas('#canvasID');
var line = new Line(200, 60, 400, 240, '#3b7d5d');
var line2 = new Line(300, 80, 295, 250, '#5298ca');
var line3 = new Line(300, 80, 30, 200, '#dc659d');

var rect = new Rect(60, 100, 60, 100, '#88b5b7');

var circle = new Circle(110, 110, 30, '#51e5a4');

drawAray.add(line,line2,line3, rect, circle);




