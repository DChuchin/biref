import render from './modules/render';
import model from './modules/model';
import resetRequired from './modules/resetRequired';

const form = document.querySelector('form');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

const goNext = e => {
  e.preventDefault();

  if (form.reportValidity()) {
    model.direction = 'forward';
    model.nextStep();
  }
  render();
};

const goBack = e => {
  e.preventDefault();
  model.direction = 'backward';
  model.prevStep();
  render();
};

// listeners
form.addEventListener('input', () => render());
prevBtn.addEventListener('click', goBack);
nextBtn.addEventListener('click', goNext);

window.model = model; // TODO remove from prod

// resetRequired(form);
render();
