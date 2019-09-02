const updateRequired = fieldset => {
  Array.from(fieldset.elements).forEach(formElement => {
    if (formElement.dataset.required) {
      formElement.required = formElement.dataset.required;
    }
  });
};

export default updateRequired;
