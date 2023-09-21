import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', event => {
  const currentTime = event.target.currentTime;
  // Зберігайте час відтворення у локальному сховищі
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
});

// Отримати збережений час відтворення з локального сховища
const savedTime = localStorage.getItem('videoplayer-current-time');

// Перевірка, чи є збережений час і чи він є числом
if (savedTime !== null && !isNaN(savedTime)) {
  // Перетворити збережений час у число
  const currentTime = parseFloat(savedTime);

  // Встановити збережений час відтворення
  player.setCurrentTime(currentTime);
} else {
  // Якщо збережений час відсутній або некоректний, робити щось інше (наприклад, починати від початку)
  // player.setCurrentTime(0); // Наприклад, почати від початку
}

// Тепер ви можете відтворити відео
player.play();
