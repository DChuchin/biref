class Model {
  constructor(step = 0, maxStep = 0) {
    Object.assign(this, { step, maxStep });
  }

  nextStep() {
    if (this.step < this.maxStep) {
      this.step += 1;
    }
  }

  prevStep() {
    if (this.step > 0) {
      this.step -= 1;
    }
  }
}

const form = document.querySelector('form');
const stepSections = form && Array.from(form.querySelectorAll('[data-step]'));
const maxStep = Math.max(
  ...stepSections.map(step => Math.floor(step.dataset.step))
);
const model = new Model(0, maxStep);

export default model;
