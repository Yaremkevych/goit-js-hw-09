const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

function saveToLS(key, value) {
  const validValue = JSON.stringify(value);
  localStorage.setItem(key, validValue);
}

function loadFromLS(key) {
  const item = localStorage.getItem(key);
  try {
    const validItem = JSON.parse(item);
    return validItem;
  } catch {
    return item;
  }
}

form.addEventListener('input', () => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  saveToLS(STORAGE_KEY, formData);
});

document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(STORAGE_KEY);
  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  } else {
    {
      formData.email = email;
      formData.message = message;
      console.log(formData);
    }
  }

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
});
