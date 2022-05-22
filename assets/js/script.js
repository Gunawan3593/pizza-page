const slider = document.querySelector('#slider');
const timer = ms => new Promise(res => setTimeout(res, ms));

let slideIndex = 1;
slide(slideIndex);

const sliderLoad = document.querySelector('#slider-load');
const perSec = document.body.clientWidth / 1000;
let loadingSlider = 0;
let pause = false;
movedLoad();

async function movedLoad() {
  while(true) {
    if(loadingSlider > document.body.clientWidth) {
      loadingSlider=0;
      if(slideIndex == 4) slideIndex = 0;
      slideIndex++;
      slide(slideIndex);
    }
    await timer(8);
    if(!pause) {
      sliderLoad.setAttribute('style', `transform: translateX(${loadingSlider}px);`);
      loadingSlider += perSec;
    }
  }
}


async function slide(index) {
  const slide1 = document.querySelector(`#slide-${index}`);
  let lastIndex = 0
  if(index === 1) {
    lastIndex = 4;
  } else {
    lastIndex = index - 1;
  }
  const slide2 = document.querySelector(`#slide-${lastIndex}`);
  const caption1h = document.querySelector(`#caption${index}-h`);
  const caption1p = document.querySelector(`#caption${index}-p`);
  const caption1a = document.querySelector(`#caption${index}-a`);
  const caption2h = document.querySelector(`#caption${lastIndex}-h`);
  const caption2p = document.querySelector(`#caption${lastIndex}-p`);
  const caption2a = document.querySelector(`#caption${lastIndex}-a`);

  slide1.classList.remove('hidden');
  slide1.classList.add('animate-fade-in-up');
  slide1.classList.add('animate-fade-in-up');
  slide2.classList.remove('hidden');
  slide2.classList.add('animate-fade-out-up');
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
  caption2p.setAttribute('style', '');
  caption2a.setAttribute('style', '');
  caption1p.setAttribute('style', 'animation-delay: 600ms;');
  caption1a.setAttribute('style', 'animation-delay: 700ms;');

  await timer(1000);
  slide2.classList.add('hidden');
  slide2.classList.remove('animate-fade-out-up');
  slide2.classList.remove('animate-fade-out-up');

  slide1.classList.remove('animate-fade-in-up');
  slide1.classList.remove('animate-fade-in-up');
}

slider.addEventListener('mouseover', function() {
  pause = true;
});

slider.addEventListener('mouseout', function() {
  pause = false;
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const hamburgerLineTop = document.querySelector('#hamburger-line-top');
const hamburgerLineMid = document.querySelector('#hamburger-line-mid');
const hamburgerLineBottom = document.querySelector('#hamburger-line-bottom');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  if(!hamburger.classList.contains('hamburger-active') && navMenu.classList.contains('hidden')) {
    hamburger.classList.add('hamburger-active');
    navMenu.classList.remove('hidden');
  } else {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// click out humberger
window.addEventListener('click', function(e) {
  console.log(e.target);
  if(e.target !== hamburger && e.target !== navMenu && e.target !== hamburgerLineTop && e.target !== hamburgerLineMid && e.target !== hamburgerLineBottom ) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});