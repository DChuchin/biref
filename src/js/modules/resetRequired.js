const resetRequired = form => {
  Array.from(form.elements).forEach(item => {
    if (item.required) {
      item.dataset.required = true;
      item.required = false;
    }
  });
};

export default resetRequired;
