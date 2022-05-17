/* let getRandomNumber = function(size){ // Получить случайное число от 0 до size-1
    return Math.floor(Math.random() * size);
};

let getDistance = function(event, target){ //Вычисляем расстояние от клика до клада
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
return Math.sqrt(diffX * diffX) + (diffY * diffY); //вычисляем квадратный корень от гиппотенузы
};

let getDistanceHint = function(distance){ //получить строку подсказку
    if (distance < 10){
        return "Обожжешься!"
    } else if (distance < 20){
        return "Очень горячо!";
    } else if (distance < 40){
        return "Горячо!";
    } else if (distance < 80){
        return "Тепло!";
    } else if (distance < 160){
        return "Холодно";
    } else if (distance < 320){
        return "Очень холодно";
    } else {return "Замерзнешь!";
}
};
// создаем переменные
let width = 400;
let height = 400;
let clicks = 0;

let target = { //случайная позиция клада
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

$("#map").click(function (event) { // обработчик кликов
clicks++;
});


let distance = getDistance(event, target); // получаем расстояние от клика до клада
let distanceHint = getDistanceHint(distance);  // Преобразуем расстояние в подсказку
$("#distance").text(distanceHint);  // Записываем в элемент #distance новую подсказку

if (distance < 8){ // Если клик был достаточно близко, поздравляем с победой
    alert('Клад найден! Сделано кликов ' + clicks);
}

*/

 // Получить случайное число от 0 до size-1
 var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
  // Вычислить расстояние от клика (event) до клада (target)
  var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
  // Получить для расстояния строку подсказки
  var getDistanceHint = function (distance) {

if (distance < 10) {
      return "Обожжешься!";
    } else if (distance < 20) {
      return "Очень горячо";
    } else if (distance < 40) {
      return "Горячо";
    } else if (distance < 80) {
      return "Тепло";
    } else if (distance < 160) {
      return "Холодно";
    } else if (distance < 320) {
      return "Очень холодно";
    } else {
      return "Замерзнешь!";
} };
  // Создаем переменные
  var width = 400;
  var height = 400;
  var clicks = 0;
  // Случайная позиция клада
  var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
  // Добавляем элементу img обработчик клика
 $("#map").click(function (event) {
    clicks++;
    // Получаем расстояние от места клика до клада
    var distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);
    // Если клик был достаточно близко, поздравляем с победой
   if (distance < 8) {
      alert("Клад найден! Сделано кликов: " + clicks);
} });