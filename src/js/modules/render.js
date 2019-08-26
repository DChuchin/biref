import updateCounter from './updateCounter';
import model from './model';
import showForm from './showForm';
import updateRequired from './updateRequired';
import resetRequired from './resetRequired';

const render = () => {
  const { step, maxStep } = model;
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const form = document.querySelector('form');
  const formStepList = Array.from(form && form.querySelectorAll(`[data-step]`));

  updateCounter();

  formStepList.forEach(formStep => {
    const dependOnField = formStep.dataset.dependOnField;
    const dependOnValue = formStep.dataset.dependOnValue;
    const hasDependency = dependOnField && dependOnValue;

    if (formStep.dataset.step < step) {
      updateRequired(formStep);
    } else {
      resetRequired(formStep);
    }

    if (formStep.dataset.step == step) {
      if (
        hasDependency &&
        form.elements[dependOnField].value !== dependOnValue
      ) {
        formStep.style.display = 'none';
      } else {
        updateRequired(formStep);
        formStep.style.display = 'block';
      }
    } else {
      formStep.style.display = 'none';
    }
  });

  prevBtn.disabled = 0 === step;
  nextBtn.disabled = step === maxStep;
};

export default render;
