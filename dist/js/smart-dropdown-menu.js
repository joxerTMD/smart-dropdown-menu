/**
 * @yami-beta/smart-dropdown-menu
 *
 * Copyright (c) 2016 Takahiro Abe
 *
 * This software is released under the MIT license
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SmartDropdownMenu = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var SmartDropdownMenuItem = function () {
  function SmartDropdownMenuItem(el, index) {
    classCallCheck(this, SmartDropdownMenuItem);

    this.el = el;
    this.index = index;
    this.el.classList.add('item' + this.index);

    this.el.addEventListener('mouseover', this.openSubmenu.bind(this));
    this.el.addEventListener('mouseout', this.closeSubmenu.bind(this));
  }

  createClass(SmartDropdownMenuItem, [{
    key: 'openSubmenu',
    value: function openSubmenu() {
      this.el.classList.add('show');
    }
  }, {
    key: 'closeSubmenu',
    value: function closeSubmenu() {
      this.el.classList.remove('show');
    }
  }]);
  return SmartDropdownMenuItem;
}();

var SmartDropdownMenu = function () {
  function SmartDropdownMenu(node) {
    classCallCheck(this, SmartDropdownMenu);

    this.el = node;
    this.items = [];

    var menuItem = document.querySelectorAll('.smart-dropdown-menu > .sdm-list > li');
    for (var i = 0; i < menuItem.length; i++) {
      this.items.push(new SmartDropdownMenuItem(menuItem[i], i));
    }

    this.el.addEventListener('mouseover', this.showMenu.bind(this));
    this.el.addEventListener('mouseout', this.hideMenu.bind(this));
    this.showMenu();
    this.appendTriareaStyle();
    this.hideMenu();
  }

  createClass(SmartDropdownMenu, [{
    key: 'showMenu',
    value: function showMenu(event) {
      this.el.classList.add('show');
    }
  }, {
    key: 'hideMenu',
    value: function hideMenu(event) {
      this.el.classList.remove('show');
    }
  }, {
    key: 'appendTriareaStyle',
    value: function appendTriareaStyle() {
      // <style> for triarea
      var styleTag = document.getElementById('smart-dropdown-menu-style');
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.id = 'smart-dropdown-menu-style';
        document.querySelector('head').appendChild(styleTag);
      }
      var styleObj = this.calculateTriarea();
      styleTag.innerHTML = this.objectToStyle(styleObj);
    }
  }, {
    key: 'calculateTriarea',
    value: function calculateTriarea() {
      // "triarea" extend hover area of menu for mouse cursor's diagonal movement
      var menuListSub = this.el.querySelector('li');
      var menuItemWidth = menuListSub.offsetWidth;
      var menuItemHeight = menuListSub.offsetHeight;
      var triareaStyleObj = {};

      for (var i = 0; i < this.items.length; i++) {
        this.items[i].openSubmenu();

        // calc angle of elevation
        var elevation = Math.floor(Math.atan2(menuItemWidth * 0.5, menuItemHeight * i + menuItemHeight / 2) * 180 / Math.PI);
        triareaStyleObj['.item' + i + ':before'] = {
          'height': menuItemHeight * i + menuItemHeight / 2 + 'px',
          'transform': 'skewX(-' + elevation + 'deg)'
        };

        var submenuHeight = this.items[i].el.querySelector('.sdm-list').offsetHeight;
        var height = submenuHeight - menuItemHeight / 2 - menuItemHeight * i;
        // calc angle of depression
        var depression = Math.floor(Math.atan2(menuItemWidth * 0.5, height) * 180 / Math.PI);
        triareaStyleObj['.item' + i + ':after'] = {
          'margin-top': '-' + menuItemHeight / 2 + 'px',
          'height': height + 'px',
          'transform': 'skewX(' + depression + 'deg)'
        };

        this.items[i].closeSubmenu();
      }

      return triareaStyleObj;
    }
  }, {
    key: 'objectToStyle',
    value: function objectToStyle(obj) {
      var styleText = '';
      Object.keys(obj).forEach(function (selector) {
        styleText += selector + '{';
        Object.keys(obj[selector]).forEach(function (property) {
          styleText += property + ': ' + obj[selector][property] + ';';
        });
        styleText += '}';
      });
      return styleText;
    }
  }]);
  return SmartDropdownMenu;
}();

return SmartDropdownMenu;

})));
