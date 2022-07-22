// Copyright Date
n = new Date();
y = n.getFullYear();
document.getElementById('date').innerHTML = y;

//Menu Icon Open/Close
//Menu Container slide In/Out

const menuIcon = document.getElementById('menuIcon');
const menuContainer = document.getElementById('menuContainer');
menuIcon.addEventListener('mousedown', () => {
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-expand');
  menuContainer.classList.remove('hidden');
  setTimeout(() => {
    menuContainer.classList.toggle('slideOut');
    menuContainer.classList.toggle('slideIn');
  }, 200);
});
menuContainer.addEventListener('mousedown', () => {
  setTimeout(() => {
    menuContainer.classList.toggle('slideOut');
    menuContainer.classList.toggle('slideIn');
  }, 200);
});

//MenuLink close menu

const menuLink = document.querySelectorAll('.menuLink');
menuLink.forEach((link) => {
  link.addEventListener('mousedown', () => {
    menuContainer.classList.toggle('slideOut');
    menuContainer.classList.toggle('slideIn');
  });
});

//theProcess open/close

const learnAbout = document.getElementById('learnAbout');
const theProcess = document.getElementById('theProcess');
const theProcessLink = document.getElementById('theProcessLink')
learnAbout.addEventListener('mousedown', () => {
  setTimeout(() => {
    theProcess.classList.toggle('puffOut');
    theProcess.classList.toggle('puffIn');
    theProcess.classList.toggle('hidden')
  }, 200);
});
theProcess.addEventListener('mousedown', () => {
  setTimeout(() => {
    theProcess.classList.toggle('puffOut');
    theProcess.classList.toggle('puffIn');
    theProcess.classList.toggle('hidden');
  }, 200);
})
theProcessLink.addEventListener('mousedown', () => {
  setTimeout(() => {
    menuContainer.classList.toggle('slideOut');
    menuContainer.classList.toggle('slideIn');
  }, 200);
  setTimeout(() => {
    theProcess.classList.toggle('puffOut');
    theProcess.classList.toggle('puffIn');
    theProcess.classList.toggle('hidden');
  }, 400);
})
