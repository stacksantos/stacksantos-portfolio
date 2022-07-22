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

//MenuLink close menu

const menuLink = document.querySelectorAll('.menuLink');
menuLink.forEach((link) => {
  link.addEventListener('mousedown', () => {
      menuContainer.classList.toggle('slideOut');
      menuContainer.classList.toggle('slideIn');
  });
});
