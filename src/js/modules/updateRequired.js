const updateRequired = fieldset => {
  Array.from(fieldset.elements).forEach(
    formElement => (formElement.required = formElement.dataset.required)
  );
};

export default updateRequired;
