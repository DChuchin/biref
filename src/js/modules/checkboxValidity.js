const checkboxValidity = checkboxGroup => {
  const requiredElements = Array.from(
    checkboxGroup.querySelectorAll('input[type="checkbox"]')
  );

  return requiredElements.some(element => element.checked);
};

export default checkboxValidity;
