import SmartDropdownMenuItem from './smart-dropdown-menu-item';

export default class SmartDropdownMenu {
  constructor(node) {
    this.el = node;
    this.items = [];

    let menuItem = this.el.querySelectorAll('.menu-list > .menu-item');
    for (let i = 0; i < menuItem.length; i++) {
      this.items.push(new SmartDropdownMenuItem(menuItem[i], i));
    }

    this.el.addEventListener('mouseover', this.showMenu.bind(this));
    this.el.addEventListener('mouseout', this.hideMenu.bind(this));
    this.showMenu();
    this.triarea();
    this.hideMenu();
  }

  showMenu(event) {
    this.el.classList.add('show');
  }

  hideMenu(event) {
    this.el.classList.remove('show');
  }

  triarea() {
    // 擬似要素のcss変更用styleタグ
    let categoryMenuStyle = document.getElementById('smart-dropdown-menu-style');
    if (!categoryMenuStyle) {
      categoryMenuStyle = document.createElement('style');
      categoryMenuStyle.type = 'text/css';
      categoryMenuStyle.id = 'smart-dropdown-menu-style';
      document.querySelector('head').appendChild(categoryMenuStyle);
    }

    // サブメニュー選択のためにカーソルを斜め移動した際に
    // 親メニューの選択が変わってしまわないように、hover判定領域を擬似要素で拡大する
    let menuListSub = this.el.querySelector('.menu-item');
    let menuItemWidth = menuListSub.offsetWidth;
    let menuItemHeight = menuListSub.offsetHeight;
    let categoryMenuStyleObj = {};

    for(let i = 0; i < this.items.length; i++) {
      this.items[i].openSubmenu();

      // 斜め上方向のhover判定拡大用のbeforeを生成
      let topElevation = Math.floor(Math.atan2(menuItemWidth * 0.5, menuItemHeight * i + menuItemHeight / 2) * 180 / Math.PI);
      categoryMenuStyleObj[`.item${i}:before`] = {
        'height': `${menuItemHeight * i + menuItemHeight / 2}px`,
        'transform': `skewX(-${topElevation}deg)`,
      };

      let submenuHeight = this.items[i].el.querySelector('.submenu-list').offsetHeight;
      // 斜め下方向のhover判定拡大用のafterを生成
      let height = (submenuHeight - menuItemHeight / 2) - menuItemHeight * i;
      let bottomElevation = Math.floor(Math.atan2(menuItemWidth * 0.5, height) * 180 / Math.PI);
      categoryMenuStyleObj[`.item${i}:after`] = {
        'margin-top': `-${menuItemHeight / 2}px`,
        'height': `${height}px`,
        'transform': `skewX(${bottomElevation}deg)`,
      };

      this.items[i].closeSubmenu();
    }

    categoryMenuStyle.innerHTML = this.objectToStyle(categoryMenuStyleObj);
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
