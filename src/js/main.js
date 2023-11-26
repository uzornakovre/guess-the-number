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

let hiddenNumber = null;
let attempts = 0;

const setRangeCounter = (evt) => {
  rangeValueElement.textContent = evt.target.value;
};

const setHiddenNumber = (range) => {
  hiddenNumber = Math.round(Math.random() * range);
  answerInput.max = range;
};

const startGame = (evt) => {
  evt.preventDefault();
  rangeForm.classList.remove("range_active");
  answerForm.classList.add("answer_active");
  outputCounter.classList.add("output__counter_visible");
  setHiddenNumber(evt.target.range.value);
  answerInput.focus();
};

const checkNumber = (evt) => {
  evt.preventDefault();
  const { value } = evt.target.answer;
  attempts++;
  outputCounterValue.textContent = attempts;
  setOutput(value, attempts);

  if (value == hiddenNumber) {
    answerForm.classList.remove("answer_active");
    restartButton.classList.add("button_active");
    restartButton.focus();
  }

  answerInput.value = "";
};

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

const setOutputTooltip = (value) => {
  if (value % 2 == 0) {
    outputTooltipElement.textContent = "с четным числом";
  } else outputTooltipElement.textContent = "с нечетным числом";
};

const toggleOutputTooltip = (attempts, value) => {
  if (attempts % 3 === 0 && value != hiddenNumber) {
    outputTooltipElement.classList.add("output__tooltip_visible");
  } else outputTooltipElement.classList.remove("output__tooltip_visible");
};

const setOutput = (value, attempts) => {
  setOutputText(value);
  setOutputTooltip(hiddenNumber);
  toggleOutputTooltip(attempts, value);
};

const initGame = () => {
  hiddenNumber = null;
  attempts = 0;

  outputCounterValue.textContent = attempts;
  rangeForm.classList.add("range_active");
  outputTextElement.classList.remove("output__text_visible");
  outputTooltipElement.classList.remove("output__tooltip_visible");
  outputCounter.classList.remove("output__counter_visible");
  restartButton.classList.remove("button_active");
};

rangeInput.addEventListener("input", setRangeCounter);
rangeForm.addEventListener("submit", startGame);
answerForm.addEventListener("submit", checkNumber);
restartButton.addEventListener("click", initGame);
