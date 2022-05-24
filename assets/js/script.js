const slider = document.querySelector('#slider');
const timer = ms => new Promise(res => setTimeout(res, ms));

let slideIndex = 1;
let lastIndex = 0;

const sliderLoad = document.querySelector('#slider-load');
const perSec = document.body.clientWidth / 1000;
let loadingSlider = 0;
let pause = false;
const pageSlider = document.querySelector('#page-slider');
const prevSlider = document.querySelector('#prev-slider');
const nextSlider = document.querySelector('#next-slider');
const prevImage = document.querySelector('#prev-image');
const nextImage = document.querySelector('#next-image');

slide(slideIndex);

movedLoad();

async function movedLoad() {
  while(true) {
    if(loadingSlider > document.body.clientWidth) {
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

async function slide(index, currentIndex) {
  loadingSlider = 0;
  const slide1 = document.querySelector(`#slide-${index}`);
  const pageSlider1 = pageSlider.querySelector(`div:nth-child(${index})`);
  pageSlider1.classList.add('page-slider-active');
  if(currentIndex) {
    lastIndex = currentIndex;
  } else {
    if(index === 1) {
      lastIndex = 4;
    } else {
      lastIndex = index - 1;
    }
  }
  const slide2 = document.querySelector(`#slide-${lastIndex}`);
  const pageSlider2 = pageSlider.querySelector(`div:nth-child(${lastIndex})`);
  pageSlider2.classList.remove('page-slider-active');
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

  let prevIndex;
  if(index === 1) {
    prevIndex = 4;
  } else {
    prevIndex = index - 1;
  }
  const sliderImage1 = document.querySelector(`#slide-${prevIndex}`);
  prevImage.src = sliderImage1.src;

  let nextIndex;
  if(index === 4) {
    nextIndex = 1;
  } else {
    nextIndex = index + 1;
  }
  const sliderImage2 = document.querySelector(`#slide-${nextIndex}`);
  nextImage.src = sliderImage2.src;

  await timer(1000);
  slide2.classList.add('hidden');
  slide2.classList.remove('animate-fade-out-up');
  slide2.classList.remove('animate-fade-out-up');

  slide1.classList.remove('animate-fade-in-up');
  slide1.classList.remove('animate-fade-in-up');
}


let lastSlide;
for(let i=1; i<=4; i++) {
  pageSlider.querySelector(`div:nth-child(${i})`).addEventListener('click', function(){
    if (slideIndex === i) return;
    lastSlide = slideIndex;
    slideIndex = i;
    pause = false;
    slide(slideIndex, lastSlide);
  });
}

slider.addEventListener('mouseover', function() {
  pageSlider.classList.remove('hidden');
  pageSlider.classList.add('flex');
  prevSlider.classList.remove('hidden');
  prevSlider.classList.add('flex');
  nextSlider.classList.remove('hidden');
  nextSlider.classList.add('flex');
  pause = true;
});

slider.addEventListener('mouseout', function() {
  pageSlider.classList.add('hidden');
  pageSlider.classList.remove('flex');
  prevSlider.classList.add('hidden');
  prevSlider.classList.remove('flex');
  nextSlider.classList.add('hidden');
  nextSlider.classList.remove('flex');
  pause = false;
});


prevSlider.addEventListener('mouseover', function() {
  prevImage.classList.remove('hidden');
});

prevSlider.addEventListener('click', function() {
  let prevIndex;
  if(slideIndex === 1) {
    prevIndex = 4;
  }else{
    prevIndex = slideIndex - 1;
  }
  lastSlide = slideIndex;
  pause = false;
  slide(prevIndex, lastSlide);
  slideIndex = prevIndex;
});

nextSlider.addEventListener('mouseover', function() {
  nextImage.classList.remove('hidden');
});

nextSlider.addEventListener('click', function() {
  let nextIndex;
  if(slideIndex === 4) {
    nextIndex = 1;
  }else{
    nextIndex = slideIndex + 1;
  }
  lastSlide = slideIndex;
  pause = false;
  slide(nextIndex, lastSlide);
  slideIndex = nextIndex;
});

prevSlider.addEventListener('mouseout', function() {
  prevImage.classList.add('hidden');
});

nextSlider.addEventListener('mouseout', function() {
  nextImage.classList.add('hidden');
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
  if(e.target !== hamburger && e.target !== navMenu && e.target !== hamburgerLineTop && e.target !== hamburgerLineMid && e.target !== hamburgerLineBottom ) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});


// Menu
let startMenu = 1;
let selectedMenu = 0;
const menuLink = document.querySelector('#menu-link');

showMenu(startMenu);

for(let i = 1; i <= 4; i++) {
  const linkEL = menuLink.querySelector(`li:nth-child(${i})`);
  linkEL.addEventListener('click', function() {
    showMenu(i);
  });
}

function showMenu(index) {
  const linkSelected = menuLink.querySelector(`li:nth-child(${index})`);
  const tabMenu = document.querySelector(`#tab-menu > div:nth-child(${index})`);
  if(selectedMenu > 0) {
    const linkEL2 = menuLink.querySelector(`li:nth-child(${selectedMenu})`);
    const tabMenu2 = document.querySelector(`#tab-menu > div:nth-child(${selectedMenu})`);
    linkEL2.classList.remove('text-primary');
    tabMenu2.classList.add('hidden');
  }
  selectedMenu = index;
  linkSelected.classList.add('text-primary');
  tabMenu.classList.remove('hidden');
}

const galleryFood = document.querySelector('#gallery-food');
let lastSelectGallery = 0;
const totalGallery = galleryFood.childElementCount;

const allFood = [1,2,3,4,5,6];
const dinnerFood = [1,3];
const lunchFood = [1,3,5];
const breakfastFood = [1,5,6];
const dessert = [2,3,5];

getGallery(1);

for(let i = 1; i <= 5; i++) {
  const tabGallery = document.querySelector(`#gallery-tab > li:nth-child(${i})`);
  tabGallery.addEventListener('click', function () {
    getGallery(i);
  });
}

function getGallery(index) {
  const tabGallery1 = document.querySelector(`#gallery-tab > li:nth-child(${index})`);
  tabGallery1.classList.remove('bg-secondary');
  tabGallery1.classList.add('bg-primary');
  if(lastSelectGallery > 0) {
    const tabGallery2 = document.querySelector(`#gallery-tab > li:nth-child(${lastSelectGallery})`);
    tabGallery2.classList.remove('bg-primary');
    tabGallery2.classList.add('bg-secondary');
  }
  if(index == 1) {
    showGallery(allFood);
  } else if(index == 2) {
    showGallery(dinnerFood);
  } else if(index == 3) {
    showGallery(lunchFood);
  } else if(index == 4) {
    showGallery(breakfastFood);
  } else if(index == 5) {
    showGallery(dessert);
  }
  lastSelectGallery = index;
}

async function showGallery(foods) {
  for(let i = 1; i <= totalGallery; i++) {
    const elGallery2 = document.querySelector(`#gallery-food > div:nth-child(${i})`);
    elGallery2.classList.remove('scale-100');
    elGallery2.classList.add('scale-0');
    elGallery2.classList.add('hidden');
  }
  for(let i = 1; i <= totalGallery; i++) {
    const elGallery = document.querySelector(`#gallery-food > div:nth-child(${i})`);
    if (!(foods.indexOf(i) == -1)) {
      elGallery.classList.remove('hidden');
      await timer(300);
      elGallery.classList.remove('scale-0');
      elGallery.classList.add('scale-100');
    }
  }
}


let galleryIndex = 0;

for(let i = 1; i <= totalGallery; i++) {
  const zoomEl = document.querySelector(`#gallery-food > div:nth-child(${i}) > div:nth-child(2)`);
  zoomEl.addEventListener('click', function() {
    sliderGallery(i);
  });
}

const gallerySlider = document.querySelector('#gallery-slider');
async function sliderGallery(index) {
  if(galleryIndex > 0) {
    const galleryImage2 = document.querySelector(`#gallery-image > img:nth-child(${galleryIndex})`);
    galleryImage2.classList.add('hidden');
  }
  const galleryContent = document.querySelector('#gallery-content');
  const currentSlide = document.querySelector('#current-slide');
  currentSlide.innerHTML = index;
  gallerySlider.classList.remove('hidden');
  galleryContent.classList.remove('scale-100');
  await timer(200);
  const galleryImage = document.querySelector(`#gallery-image > img:nth-child(${index})`);
  galleryImage.classList.remove('hidden');
  galleryContent.classList.add('scale-100');
  await timer(450);
  galleryContent.classList.add('animate-wiggle');
  await timer(500);
  galleryContent.classList.remove('animate-wiggle');
  galleryIndex = index;
}

const closeSlider = document.querySelector('#close-slider');
closeSlider.addEventListener('click', function() {
  gallerySlider.classList.add('hidden');
});

const prevGallery = document.querySelector('#prev-gallery');
prevGallery.addEventListener('click', function() {
  let prevIndex = 0;
  if(galleryIndex == 1) {
    prevIndex = 6;
  } else {
    prevIndex = galleryIndex - 1;
  }
  sliderGallery(prevIndex);
});

const nextGallery = document.querySelector('#next-gallery');

nextGallery.addEventListener('click', function() {
  let nextIndex = 0;
  if(galleryIndex == 6) {
    nextIndex = 1;
  } else {
    nextIndex = galleryIndex + 1;
  }
  sliderGallery(nextIndex);
});