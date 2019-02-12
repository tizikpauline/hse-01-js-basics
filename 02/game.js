// Координаты трехпалубного корабля
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль или нет

// Создаем три переменные: location1, location2, location3
let location1 = 5
let location2 = 6
let location3 = 7
// Создаем переменную currentShot
let currentShot
// Создаем переменную shots
let shots = 0
// Создаем переменную для количества попаданий hits
let hits = 0
// Создаем переменную, чтобы отслеживать потоплен или нет
let isSunk = false


while (isSunk === false) {
  // Получить координаты выстрела
  currentShot = Number(prompt("Введите число от 0 до 9:"))
  // Нужно увеличить счетчик всех выстрелов
  shots += 1
  // Сравнить координаты выстрела с координатами корабля
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    // Если игрок попал, то увеличиваем счетчик попаданий на 1
    hits += 1
    if (hits === 3) {
        // Если количество попаданий равно 3, то меняем значение переменной isSunk на true и сообщаем о победе
      isSunk = true
      alert("Победа!")
    }
  }
  if (currentShot < 0) {
    alert("Введенное вами число меньше 0, введите другое число от 0 до 9!")
  } else if (currentShot > 9) {
    alert("Введенное вами число больше 9, введите другое число от 0 до 9!")
  }
  if (currentShot < 5 || currentShot > 7 ) {
    alert("Вы промахнулись!")
  } else if (currentShot >= 5 || currentShot <= 8){
    alert("Вы попали!")
  }
}
// Выводим статистику игры и рейтинг игрока
let rating = Math.round(3 / shots * 100)
alert("Вам понадобилось " + shots + " выстрелов, чтобы потопить корбаль. Ваш рейтинг: " + rating)
