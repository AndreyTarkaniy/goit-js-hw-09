import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');

const inputDays = document.querySelector('[data-days]');
const inputHours = document.querySelector('[data-hours]');
const inputMinutes = document.querySelector('[data-minutes]');
const inputSeconds = document.querySelector('[data-Seconds]');

let diffTime = 0;
let timerId = null;
let dateSelect = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateSelect = selectedDates[0];
    if (selectedDates[0] < options.defaultDate) {
      startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};
// options.onClose();

startBtn.addEventListener('click', handleStartBtnClick);

function handleStartBtnClick() {
  timerId = setInterval(() => {
    diffTime = dateSelect - new Date();
    // console.log(diffTime);
    console.log(dateSelect);
    console.log(new Date());

    inputSeconds.textContent = convertMs(diffTime).seconds;
    inputMinutes.textContent = convertMs(diffTime).minutes;
    inputHours.textContent = convertMs(diffTime).hours;
    inputDays.textContent = convertMs(diffTime).days;

    // console.log(inputDays.textContent);

    if (diffTime < 0) {
      clearInterval(timerId);
    }
  }, 1000);
}

flatpickr(inputEl, options);
function pad(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
