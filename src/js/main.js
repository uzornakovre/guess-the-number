import "../assets/styles/index.scss";
import {
  answerForm,
  answerInput,
  outputCounter,
  outputCounterValue,
  outputTextElement,
  outputTooltipElement,
  rangeForm,
  rangeInput,
  rangeValueElement,
  restartButton,
} from "./selectors";

let hiddenNumber = null; // здесь будем хранить загаданное число
let attempts = 0; // количество попыток

// установка верхней границы диапазона на счетчике
const setRangeCounter = (evt) => {
  rangeValueElement.textContent = evt.target.value;
};

// загадываем число в зависимости от диапазона
const setHiddenNumber = (range) => {
  hiddenNumber = Math.ceil(Math.random() * range);
  answerInput.max = range; // выставляем аттрибут max равным верхней границы (для валидации)
};

// функция запуска игры
const startGame = (evt) => {
  evt.preventDefault();
  rangeForm.classList.remove("range_active"); // прячем стартовую форму
  answerForm.classList.add("answer_active"); // показываем форму ввода числа
  outputCounter.classList.add("output__counter_visible"); // показываем счетчик попыток
  setHiddenNumber(evt.target.range.value); // загадываем число
  answerInput.focus(); // ставим фокус на input для удобства
};

// функция проверки введенного пользователем числа
const checkNumber = (evt) => {
  evt.preventDefault();
  const { value } = evt.target.answer; // достаем значение из инпута
  attempts++; // увеличиваем счетчик попыток
  setOutput(value, attempts); // устанавливаем элементы обратной связи

  // при совпадении убираем форму ответа и показываем кнопку перезапуска
  if (value == hiddenNumber) {
    answerForm.classList.remove("answer_active");
    restartButton.classList.add("button_active");
    restartButton.focus();
  }

  answerForm.reset(); // очищаем форму
};

// функция установки текста обратной связи в зависимости от значения
const setOutputText = (value) => {
  outputTextElement.classList.add("output__text_visible");

  if (value < hiddenNumber) {
    outputTextElement.textContent = "Недобор, попробуй еще раз";
  } else if (value > hiddenNumber) {
    outputTextElement.textContent = "Перебор, пропробуй еще раз";
  } else if (value == hiddenNumber) {
    outputTextElement.textContent = `Ты угадал число ${hiddenNumber}, поздравляю!`;
  }
};

// функция установки подсказки, является ли число четным / нечетным
const setOutputTooltip = (value) => {
  if (value % 2 == 0) {
    outputTooltipElement.textContent = "с четным числом";
  } else outputTooltipElement.textContent = "с нечетным числом";
};

// функция переключения видимости подсказки
const toggleOutputTooltip = (attempts, value) => {
  if (attempts % 3 === 0 && value != hiddenNumber) {
    outputTooltipElement.classList.add("output__tooltip_visible");
  } else outputTooltipElement.classList.remove("output__tooltip_visible");
};

// функция установки всех подсказок
const setOutput = (value, attempts) => {
  outputCounterValue.textContent = attempts; // обновляем значение счетчика на странице
  setOutputText(value);
  setOutputTooltip(hiddenNumber);
  toggleOutputTooltip(attempts, value);
};

// инициализация новой игры
const initGame = () => {
  hiddenNumber = null;
  attempts = 0;

  outputCounterValue.textContent = attempts; // обновляем счетчик
  rangeForm.classList.add("range_active"); // показываем форму выбора диапазона
  outputTextElement.classList.remove("output__text_visible"); // скрываем все оутпуты
  outputTooltipElement.classList.remove("output__tooltip_visible");
  outputCounter.classList.remove("output__counter_visible");
  restartButton.classList.remove("button_active"); // скрываем кнопку рестарта
};

// вещаем слушатели
rangeInput.addEventListener("input", setRangeCounter);
rangeForm.addEventListener("submit", startGame);
answerForm.addEventListener("submit", checkNumber);
restartButton.addEventListener("click", initGame);
