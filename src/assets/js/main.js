// Copyright Date
n = new Date();
y = n.getFullYear();
document.getElementById('date').innerHTML = y;

/* -------------------------------------------------------------------------- */
/*                                  THE MENU                                  */
/* -------------------------------------------------------------------------- */

// Menu Icon & Container

const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('mousedown', () => {
  menuIcon.classList.toggle('fa-ellipsis');
  menuIcon.classList.toggle('fa-expand');
  menuContainer.classList.remove('hidden');
  setTimeout(() => {
    menuContainer.classList.toggle('slideOut');
    menuContainer.classList.toggle('slideIn');
  }, 200);
});

// Menu Container

const menuContainer = document.getElementById('menuContainer');

menuContainer.addEventListener('mousedown', () => {
  menuContainer.classList.remove('hidden');
  setTimeout(() => {
    menuIcon.classList.toggle('fa-ellipsis');
    menuIcon.classList.toggle('fa-expand');
    menuContainer.classList.toggle('slideOut');
    menuContainer.classList.toggle('slideIn');
  }, 200);
});

// Menu Link

// const menuLink = document.querySelectorAll('.menuLink');
// menuLink.forEach((link) => {
//   link.addEventListener('mousedown', () => {
//     menuContainer.classList.toggle('slideOut');
//     menuContainer.classList.toggle('slideIn');
//   });
// });

/* -------------------------------------------------------------------------- */
/*                                 THE PROCESS                                */
/* -------------------------------------------------------------------------- */

const learnAbout = document.getElementById('learnAbout');
const theProcess = document.getElementById('theProcess');
const theProcessLink = document.getElementById('theProcessLink');
learnAbout.addEventListener('mousedown', () => {
  setTimeout(() => {
    theProcess.classList.toggle('puffOut');
    theProcess.classList.toggle('puffIn');
    theProcess.classList.toggle('hidden');
  }, 200);
});
theProcess.addEventListener('mousedown', () => {
  setTimeout(() => {
    theProcess.classList.toggle('puffOut');
    theProcess.classList.toggle('puffIn');
    theProcess.classList.toggle('hidden');
  }, 200);
});
theProcessLink.addEventListener('mousedown', () => {
  setTimeout(() => {
    theProcess.classList.toggle('puffOut');
    theProcess.classList.toggle('puffIn');
    theProcess.classList.toggle('hidden');
  }, 800);
});

