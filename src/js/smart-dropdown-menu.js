import SmartDropdownMenuItem from './smart-dropdown-menu-item';

export default class SmartDropdownMenu {
  constructor(node) {
    this.el = node;
    this.items = [];

    const menuItem = this.el.querySelectorAll('.menu-list > .menu-item');
    for (let i = 0; i < menuItem.length; i++) {
      this.items.push(new SmartDropdownMenuItem(menuItem[i], i));
    }

    this.el.addEventListener('mouseover', this.showMenu.bind(this));
    this.el.addEventListener('mouseout', this.hideMenu.bind(this));
    this.showMenu();
    this.appendTriareaStyle();
    this.hideMenu();
  }

  showMenu(event) {
    this.el.classList.add('show');
  }

  hideMenu(event) {
    this.el.classList.remove('show');
  }

  appendTriareaStyle() {
    // <style> for triarea
    let styleTag = document.getElementById('smart-dropdown-menu-style');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.id = 'smart-dropdown-menu-style';
      document.querySelector('head').appendChild(styleTag);
    }
    const styleObj = this.calculateTriarea();
    styleTag.innerHTML = this.objectToStyle(styleObj);
  }

  calculateTriarea() {
    // "triarea" extend hover area of menu for mouse cursor's diagonal movement
    const menuListSub = this.el.querySelector('.menu-item');
    const menuItemWidth = menuListSub.offsetWidth;
    const menuItemHeight = menuListSub.offsetHeight;
    let triareaStyleObj = {};

    for(let i = 0; i < this.items.length; i++) {
      this.items[i].openSubmenu();

      // calc angle of elevation
      const elevation = Math.floor(Math.atan2(menuItemWidth * 0.5, menuItemHeight * i + menuItemHeight / 2) * 180 / Math.PI);
      triareaStyleObj[`.item${i}:before`] = {
        'height': `${menuItemHeight * i + menuItemHeight / 2}px`,
        'transform': `skewX(-${elevation}deg)`,
      };

      const submenuHeight = this.items[i].el.querySelector('.submenu-list').offsetHeight;
      const height = (submenuHeight - menuItemHeight / 2) - menuItemHeight * i;
      // calc angle of depression
      const depression = Math.floor(Math.atan2(menuItemWidth * 0.5, height) * 180 / Math.PI);
      triareaStyleObj[`.item${i}:after`] = {
        'margin-top': `-${menuItemHeight / 2}px`,
        'height': `${height}px`,
        'transform': `skewX(${depression}deg)`,
      };

      this.items[i].closeSubmenu();
    }

    return triareaStyleObj;
  }

  objectToStyle(obj) {
    let styleText = '';
    Object.keys(obj).forEach((selector) => {
      styleText += selector + '{';
      Object.keys(obj[selector]).forEach((property) => {
        styleText += `${property}: ${obj[selector][property]};`;
      });
      styleText += '}';
    });
    return styleText;
  }
}
