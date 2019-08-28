import model from './model';

const updateCounter = () => {
  const counter = document.querySelector('.counter');
  const bar = counter && counter.querySelector('.bar');
  const prevValue = bar.style.width || 0;
  const newValue = `${((model.step + 1) * 100) / (model.maxStep + 1)}%`;

  if (prevValue !== newValue) {
    bar.style.width = newValue;
  }
};

export default updateCounter;
