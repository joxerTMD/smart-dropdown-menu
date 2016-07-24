export default class SmartMenuItem {
  constructor(el, index) {
    this.el = el;
    this.index = index;
    this.el.classList.add(`item${this.index}`)

    this.el.addEventListener('mouseover', this.openSubmenu.bind(this));
    this.el.addEventListener('mouseout', this.closeSubmenu.bind(this));
  }

  openSubmenu() {
    this.el.classList.add('show');
  }
  closeSubmenu() {
    this.el.classList.remove('show');
  }
}
