// *************** GET CODE **********************

const button = document.getElementById('answer-button');
const radiosCheckValue = document.querySelectorAll('.radio-value');

const saveUserChoice = (element) => {
  localStorage.setItem('userChoise',element);

  }

const getRadioValues = (event) => {
  const selected = event.target.value;
  saveUserChoice(selected);
}

for (const radio of radiosCheckValue) {
  radio.addEventListener('change', getRadioValues);
  }
