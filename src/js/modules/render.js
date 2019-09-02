import anime from 'animejs';
import updateCounter from './updateCounter';
import model from './model';
import updateRequired from './updateRequired';

const render = () => {
  const { step, maxStep } = model;
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const submitBtn = document.querySelector('#submitBtn');
  const form = document.querySelector('form');
  const formStepList = Array.from(form && form.querySelectorAll(`[data-step]`));

  updateCounter();

  formStepList.forEach((formStep, index) => {
    const { dependOnField, dependOnValue } = formStep.dataset;
    const needToBeShown = dependOnField
      ? form.elements[dependOnField].value === dependOnValue
      : true;

    if (formStep.dataset.step == step && needToBeShown) {
      updateRequired(formStep);
      const height = formStep.offsetHeight;
      anime({
        targets: form,
        height: height,
        duration: 300,
        easing: 'easeInOutQuart'
      });

      anime({
        targets: formStep,
        translateX: {
          value: 0,
          duration: 500
        },
        opacity: {
          value: 1,
          duration: 500,
          delay: 200
        },
        easing: 'easeInOutQuart'
      });
    } else {
      anime({
        targets: formStep,
        translateX: {
          value: '-100%',
          duration: 500
        },
        opacity: {
          value: 0,
          duration: 300
        },
        easing: 'easeInOutQuart'
      });
    }
  });

  prevBtn.disabled = 0 === step;
  nextBtn.style.display = step === maxStep ? 'none' : 'inline-block';
  submitBtn.style.display = step === maxStep ? 'block' : 'none';
};

export default render;
