# smart-dropdown-menu
`smart-dropdown-menu` is library for dropdown menu inspired by [jQuery-menu-aim](https://github.com/kamens/jQuery-menu-aim).

[![npm version](https://badge.fury.io/js/%40yami_beta%2Fsmart-dropdown-menu.svg)](https://badge.fury.io/js/%40yami_beta%2Fsmart-dropdown-menu)

## Description
`smart-dropdown-menu` **is not use `mousemove` event**.
Hover detection of diagonal cursor movement is obtained by `:before` and `:after` of `<li>`

### Demo
Note: Hover area is shown because this example is enabled `dev` mode.

![smart-dropdown-menu demo](https://raw.githubusercontent.com/yami-beta/smart-dropdown-menu/master/example/img/demo.gif)

## How To Use

### Step1
1. Download [smart-dropdown-menu.zip](https://github.com/yami-beta/smart-dropdown-menu/releases/download/v0.1.0/smart-dropdown-menu.zip)
2. Load `dist/css/smart-dropdown-menu.css` and `dist/js/smart-dropdown-menu.js`

or

```sh
$ npm install -S @yami_beta/smart-dropdown-menu
```

```html
<link rel="stylesheet" href="node_modules/@yami_beta/smart-dropdown-menu/dist/css/smart-dropdown-menu.css">
```

```javascript
import SmartDropdownMenu from '@yami_beta/smart-dropdown-menu';
```

### Step2
Markup menu

1. Add `class="smart-dropdown-menu"` to `<ul>` wrapper (e.g. `<nav>`)
2. Add `class="smart-dropdown-menu-button"` to `<div>` in `.smart-dropdown-menu-button`
3. Add `class="sdm-list"` to `<ul>`

```html
<nav class="smart-dropdown-menu">
  <div class="smart-dropdown-menu-button">
    <span></span>
  </div>
  <ul class="sdm-list">
    <li>
      <a href="#">menu01</a>
      <ul class="sdm-list">
        <li><a href="#">submenu1_1</a></li>
        <li><a href="#">submenu1_2</a></li>
        <li><a href="#">submenu1_3</a></li>
      </ul>
    </li>
    <li>
      <a href="#">menu02</a>
      <ul class="sdm-list">
        <li><a href="#">submenu2_1</a></li>
        <li><a href="#">submenu2_2</a></li>
        <li><a href="#">submenu2_3</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

### Step3
Initialize `smart-dropdown-menu`.

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.smart-dropdown-menu');
  new SmartDropdownMenu(menu);
});
```

# [License](https://github.com/yami-beta/smart-dropdown-menu/blob/master/LICENSE)
MIT
