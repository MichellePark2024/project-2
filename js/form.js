const form = document.querySelector('[data-js="form"]');
const submitBtn = document.querySelector('[data-js="submitBtn"]');
const questionAmountLeft = document.querySelector('[data-js="question-amountLeft"]');
const ansserAmountLeft = document.querySelector('[data-js="answer-amountLeft"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const maxlength = 150;

questionInput.addEventListener("input", (event) => {
  const userInputLength = event.target.value.length
  questionAmountLeft.textContent = maxlength - userInputLength
})

answerInput.addEventListener("input", (event) => {
  const answerInputLength = event.target.value.length
  ansserAmountLeft.textContent = maxlength - answerInputLength
})


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const submittedData = Object.fromEntries(formData); 
    // console.log(submittedData)

    const newCard = document.createElement("section");
    
    newCard.innerHTML = `<img
    class="question-card__icon"
    src="./assets/bookmark.png"
    alt="bookmark"
    data-js="first-bookmark"/>

  <h2 class="question-card__title">
  ${submittedData.question}
  </h2>
  <button class="question-card__button" data-js="answer-button">show answer</button>
  <p class="question-card__answer hidden" data-js="answer">${submittedData.answer}</p>
  <div class="question-card__tags">
    <div class="question-card__tag">${submittedData.tag}</div>
    
  </div>
  `
  document.body.append(newCard);

})





