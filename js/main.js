const radioInputs = document.querySelectorAll('input[type="radio"]');
const form = document.getElementById('form');
let selectedDiv = null;

function showElementOnScreen(content, rateValue) {
    content.innerHTML = `
    <header>
    <div class="thanks-icon">
      <img src="./images/illustration-thank-you.svg" alt="Thanks Icon">
    </div>
  </header>
  <main>
    <div class="rate-result"><span>You selected ${rateValue} out of 5</span></div>
    <div class="thanks-content">
      <h1>Thank you!</h1>
      <span class="paragraph">We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</span>
    </div>
  </main>
    `
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const rateValue = event.target.elements.rating.value;

    const content = document.querySelector('.container');

    showElementOnScreen(content, rateValue);
});


radioInputs.forEach((input) => {
    input.addEventListener('click', () => {
        const div = input.closest('.circle');

        if (selectedDiv !== null) {
            selectedDiv.style.backgroundColor = '';
            selectedDiv.style.color = '';
        }

        div.style.backgroundColor = 'hsl(216, 12%, 54%)';
        div.style.color = 'white';
        selectedDiv = div;
    });
});
