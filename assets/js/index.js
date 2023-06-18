const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 180) {
        totop.classList.add("active");
    } else {
        totop.classList.remove("active");
    }
});



const menu = document.querySelector('#menu');
const list = document.querySelector('.primary-navbar-m .container ul');
const nav = document.querySelector('.primary-navbar-m');

menu.addEventListener('click', () => {
    const isMenuOpen = menu.innerHTML === 'close';

    menu.innerHTML = isMenuOpen ? 'menu' : 'close';
    list.style.display = isMenuOpen ? 'none' : 'block';
    nav.style.position = isMenuOpen ? 'relative' : 'fixed';
    nav.style.height = isMenuOpen ? 'fit-content' : '100vh';
});







const buttonGroup = document.querySelector('.btns');
const filterButtons = buttonGroup.querySelectorAll('.filter-button');
const categoryItems = document.querySelectorAll('.category-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    // Show/hide items based on selected filter
    categoryItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Toggle active class for selected filter button
    filterButtons.forEach(btn => btn.classList.remove('bactive'));
    button.classList.add('bactive');
  });
});