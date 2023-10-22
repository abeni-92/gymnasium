const bar = document.querySelector('.bar');
const navBar = document.querySelector('.navbar');
const close = document.querySelector('.close');
const links = navBar.querySelectorAll('a');


const description = document.querySelector('.description');
const gymCenter = document.querySelector('.gym-center');
const cls = document.querySelector('.cls');

bar.addEventListener("click", () => {
  navBar.style.transform = 'translateX(0%)';
});

close.addEventListener("click", () => {
  navBar.style.transform = 'translateX(-100%)';
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navBar.style.transform = 'translateX(-100%)';
  });
});

description.addEventListener("click", () => {
  if(gymCenter.style.transform === 'translateX(0%)') {
    gymCenter.style.transform = 'translateX(-100%)'; 
  } else {
    gymCenter.style.transform = 'translateX(0%)';
  }
});

cls.addEventListener("click", () => {
  gymCenter.style.transform = 'translateX(-100%)';
});