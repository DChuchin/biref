import polyfills from './polyfills';

{
  polyfills();
}

function State(step = 0, maxStep = 0) {
  Object.assign(this, { step, maxStep });
}

State.prototype.nextStep = function() {
  if (this.step < this.maxStep) {
    this.step += 1;
  }
};

State.prototype.prevStep = function() {
  if (this.step > 0) {
    this.step -= 1;
  }
};

let state = {};

const initState = () => {
  const stepsCount = document.querySelectorAll('form > fieldset').length - 1;

  state = new State(0, stepsCount);

  render();
};

const render = () => {
  console.log(state);
  const { step, maxStep } = state;
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const formStepList = Array.from(document.querySelectorAll(`[data-step]`));

  formStepList.forEach(formStep => {
    formStep.dataset.step == step
      ? (formStep.style.display = 'block')
      : (formStep.style.display = 'none');
  });

  if (step === 0) {
    prevBtn.setAttribute('disabled', 'disabled');
  } else {
    prevBtn.removeAttribute('disabled');
  }

  if (step === maxStep) {
    nextBtn.setAttribute('disabled', 'disabled');
  } else {
    nextBtn.removeAttribute('disabled');
  }
};

const form = document.querySelector('#form');

form.addEventListener('changeStep', () => {
  render();
});

prevBtn.addEventListener('click', e => {
  e.preventDefault();

  const changeStep = new Event('changeStep');

  state.prevStep();
  form.dispatchEvent(changeStep);
});

nextBtn.addEventListener('click', e => {
  e.preventDefault();

  const changeStep = new Event('changeStep');

  state.nextStep();
  form.dispatchEvent(changeStep);
});

window.state = state;

initState();
