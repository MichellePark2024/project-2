console.clear();

const firstBookmark = document.querySelector('[data-js="first-bookmark"]');

firstBookmark.addEventListener('click', (e) => {
    // console.log ('first-bookmark', e.target.src) 
    const isBookmarkFilled = firstBookmark.src.includes("/assets/bookmark_filled.png");

    // Toggle the source based on the current state
    if (isBookmarkFilled) {
        firstBookmark.src = "./assets/bookmark.png";
    } else {
        firstBookmark.src = "./assets/bookmark_filled.png";
    }
});

const answerBtn = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

answerBtn.addEventListener('click', () => {
    answer.classList.toggle('hidden');
    if (answerBtn.textContent === 'show answer'){
        answerBtn.textContent = 'hide answer';
    } else {
        answerBtn.textContent = 'show answer';
    }

    })
    
