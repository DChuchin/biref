import model from './model';

const updateCounter = () => {
  const counter = document.querySelector('.counter');
  const prevValue = counter.innerHTML;
  const newValue = `${model.step + 1} / ${model.maxStep + 1}`;

  if (prevValue !== newValue) {
    counter.innerHTML = newValue;
  }
};

export default updateCounter;
