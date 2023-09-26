import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoplayerCurrentTimeKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(event => {
  // Зберігайте час відтворення у локальному сховищі
  localStorage.setItem(videoplayerCurrentTimeKey,
  JSON.stringify(event.seconds));
}, 500));

// Отримати збережений час відтворення з локального сховища
const savedTime = localStorage.getItem(videoplayerCurrentTimeKey);

// Перевірка, чи є збережений час і чи він є числом
  // Перетворити збережений час у число

  // Встановити збережений час відтворення
  player.setCurrentTime(Number(savedTime));
