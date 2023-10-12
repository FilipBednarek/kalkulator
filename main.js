const przyciski = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('#display');

let obecnaLiczba = '';
przyciski.forEach((button) => {
  button.addEventListener('click', function () {
    const value = this.value;
    if (value === '=') {
      display.value = eval(obecnaLiczba);
      obecnaLiczba = display.value;
    } else {
      obecnaLiczba += value;
      display.value += value;
    }
  });
});
