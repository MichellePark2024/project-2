console.clear();

const switchBtn = document.querySelector('[data-js="switch"]');
const body = document.getElementsByTagName("body");
const profile = document.querySelector('[data-js="profile"]');
const settings = document.querySelector('[data-js="settings"]');

switchBtn.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");
    profile.classList.toggle("dark-mode");
    settings.classList.toggle("dark-mode");
});