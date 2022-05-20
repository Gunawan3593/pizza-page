const slide1 = document.querySelector('#slide-1');
const caption1h = document.querySelector('#caption1-h');
const caption1p = document.querySelector('#caption1-p');
const caption1a = document.querySelector('#caption1-a');
const caption2h = document.querySelector('#caption2-h');
const caption2p = document.querySelector('#caption2-p');
const caption2a = document.querySelector('#caption2-a');
const slide2 = document.querySelector('#slide-2');
const slider = document.querySelector('#slider');

let slideIndex = 1;
if(slideIndex == 1) {
  slide1.classList.remove('animate-fade-out-down');
  slide2.classList.remove('animate-fade-in-down');
  slide1.classList.add('animate-fade-in-up');
  slide2.classList.add('animate-fade-out-up');
  caption1h.classList.add('animate-fade-in-down');
  caption1p.classList.add('animate-fade-in-up');
  caption1a.classList.add('animate-fade-in-up');
}else{
  slide1.classList.remove('animate-fade-in-up');
  slide2.classList.remove('animate-fade-out-up');
  slide1.classList.add('animate-fade-out-down');
  slide2.classList.add('animate-fade-in-down');
  caption2h.classList.add('animate-fade-in-down');
  caption2p.classList.add('animate-fade-in-up');
  caption2a.classList.add('animate-fade-in-up');
}

const timer = ms => new Promise(res => setTimeout(res, ms));

const sliderLoad = document.querySelector('#slider-load');
let next = 0;
let pause = false;
movedLoad();
async function movedLoad() {
  while(true) {
    if(next == document.body.clientWidth) {
      next=0;
      if(slideIndex == 2) slideIndex = 0
      slideIndex++;
      if(slideIndex == 1) {
        slide1.classList.remove('animate-fade-out-down');
        slide2.classList.remove('animate-fade-in-down');
        slide1.classList.add('animate-fade-in-up');
        slide2.classList.add('animate-fade-out-up');
        caption1h.classList.add('animate-fade-in-down');
        caption1p.classList.add('animate-fade-in-up');
        caption1a.classList.add('animate-fade-in-up');
        caption2h.classList.remove('animate-fade-in-down');
        caption2h.classList.add('animate-fade-out-up');
        caption1h.classList.remove('animate-fade-out-up');
        caption2p.classList.remove('animate-fade-in-up');
        caption2p.classList.add('animate-fade-out-down');
        caption1p.classList.remove('animate-fade-out-down');
        caption2a.classList.remove('animate-fade-in-up');
        caption2a.classList.add('animate-fade-out-down');
        caption1a.classList.remove('animate-fade-out-down');
      }else{
        slide1.classList.remove('animate-fade-in-up');
        slide2.classList.remove('animate-fade-out-up');
        slide1.classList.add('animate-fade-out-down');
        slide2.classList.add('animate-fade-in-down');
        caption2h.classList.add('animate-fade-in-down');
        caption2p.classList.add('animate-fade-in-up');
        caption2a.classList.add('animate-fade-in-up');
        caption1h.classList.remove('animate-fade-in-down');
        caption1h.classList.add('animate-fade-out-up');
        caption2h.classList.remove('animate-fade-out-up');
        caption1p.classList.remove('animate-fade-in-up');
        caption1p.classList.add('animate-fade-out-down');
        caption2p.classList.remove('animate-fade-out-down');
        caption1a.classList.remove('animate-fade-in-up');
        caption1a.classList.add('animate-fade-out-down');
        caption2a.classList.remove('animate-fade-out-down');
      }
    }
    await timer(10);
    if(!pause) {
      sliderLoad.setAttribute('style', `transform: translateX(${next}px);`);
      next++;
    }
  }
}

slider.addEventListener('mouseover', function() {
  pause = true;
});

slider.addEventListener('mouseout', function() {
  pause = false;
});