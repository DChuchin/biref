import anime from 'animejs';
import updateCounter from './updateCounter';
import model from './model';
import showForm from './showForm';
import updateRequired from './updateRequired';
import resetRequired from './resetRequired';

const render = () => {
  const { step, maxStep } = model;
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const submitBtn = document.querySelector('#submitBtn');
  const form = document.querySelector('form');
  const formStepList = Array.from(form && form.querySelectorAll(`[data-step]`));
  const dependantElements = Array.from(
    form && form.querySelectorAll('[data-depend-on-field]')
  );

  updateCounter();

  formStepList.forEach((formStep, index) => {
    dependantElements.forEach(element => {
      const dependOnField = element.dataset.dependOnField;
      const dependOnValue = element.dataset.dependOnValue;

      if (form.elements[dependOnField].value !== dependOnValue) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
    // if (formStep.dataset.step < step) {
    //   updateRequired(formStep);
    // } else {
    //   resetRequired(formStep);
    // }

    if (formStep.dataset.step == step) {
      // updateRequired(formStep);
      const height = formStep.offsetHeight;
      console.log(height);
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
      // formStep.style.display = 'block';
    } else {
      // formStep.style.display = 'none';

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
