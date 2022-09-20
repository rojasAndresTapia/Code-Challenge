// *************** GET CODE **********************

const radiosCheckValue = document.querySelectorAll('.main__container--radiocheck__value');

const saveUserChoice = (element) => {
  localStorage.setItem('userYear',element);

  }

const getRadioValues = (event) => {
  const selected = event.target.value;
  saveUserChoice(selected);
}

for (const radio of radiosCheckValue) {
  radio.addEventListener('change', getRadioValues);
  }
