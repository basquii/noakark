const hamburger = document.querySelector(".hamburger__button")
const menu = document.querySelector(".menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('shown')
    menu.classList.toggle('show');
})



AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});