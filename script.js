function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const isOpen = menu.classList.contains('menu--is-visible');

    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        menu.classList.remove('menu--is-visible');
    });

    if (!isOpen) {
        menu.classList.add('menu--is-visible');
    }
}

function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    const isOpen = subMenu.classList.contains('sub-menu--is-visible');

    const subMenus = document.querySelectorAll('.sub-menu');
    subMenus.forEach(subMenu => {
        subMenu.classList.remove('sub-menu--is-visible');
    });

    if (!isOpen) {
        subMenu.classList.add('sub-menu--is-visible');
    }
}
