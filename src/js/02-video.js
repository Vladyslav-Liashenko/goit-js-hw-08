import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(event => {
  // Зберігайте час відтворення у локальному сховищі
  localStorage.setItem('videoplayer-current-time',
  JSON.stringify(event.seconds));
}, 500));

// Отримати збережений час відтворення з локального сховища
const savedTime = localStorage.getItem('videoplayer-current-time');

// Перевірка, чи є збережений час і чи він є числом
if (!isNaN(savedTime)) {
  // Перетворити збережений час у число
  const currentTime = parseFloat(savedTime);

  // Встановити збережений час відтворення
  player.setCurrentTime(currentTime);
};

