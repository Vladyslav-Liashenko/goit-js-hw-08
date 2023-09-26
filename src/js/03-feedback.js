import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const feedbackStorageKey = 'feedback-form-state';
let formState = {};

const updateStorage = throttle((event) => {

  formState.email = emailInput.value.trim();
  formState.message = messageTextarea.value.trim();
    localStorage.setItem(feedbackStorageKey, JSON.stringify(formState));
}, 500);


function fillFormFromStorage() {
  try {
    const storedState = localStorage.getItem(feedbackStorageKey);
    if (storedState) {
      const formState = JSON.parse(storedState);
      emailInput.value = formState.email || '';
      messageTextarea.value = formState.message || '';
    }
  } catch (error) {
    console.log(error.message);
  }
}
fillFormFromStorage();

// feedbackForm.addEventListener('input', updateStorage);

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

  formState.email = emailInput.value.trim();
  formState.message = messageTextarea.value.trim();

  // Виводимо дані в консоль
    console.log('Form submitted with data:', formState);
    
  // Очищаємо сховище
  localStorage.removeItem(feedbackStorageKey);

  // Очищаємо поля форми
  formState = {};
  event.target.reset();
});