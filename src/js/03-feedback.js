import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const feedbackStorageKey = 'feedback-form-state';


const updateStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
    localStorage.setItem(feedbackStorageKey, JSON.stringify(formState));
}, 500);


function fillFormFromStorage() {
  const storedState = localStorage.getItem(feedbackStorageKey);
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email || '';
    messageTextarea.value = formState.message || '';
  }
}
fillFormFromStorage();

// feedbackForm.addEventListener('input', updateStorage);

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  // Виводимо дані в консоль
    console.log('Form submitted with data:', formState);
    
  // Очищаємо сховище
  localStorage.removeItem(feedbackStorageKey);

  // Очищаємо поля форми
  emailInput.value = '';
  messageTextarea.value = '';
  updateStorage();
});