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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9zbWFydC1kcm9wZG93bi1tZW51LWl0ZW0uanMiLCIuLi8uLi9zcmMvanMvc21hcnQtZHJvcGRvd24tbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydERyb3Bkb3duTWVudUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihlbCwgaW5kZXgpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChgaXRlbSR7dGhpcy5pbmRleH1gKVxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9wZW5TdWJtZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmNsb3NlU3VibWVudS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9wZW5TdWJtZW51KCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9XG4gIGNsb3NlU3VibWVudSgpIHtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNtYXJ0RHJvcGRvd25NZW51SXRlbSBmcm9tICcuL3NtYXJ0LWRyb3Bkb3duLW1lbnUtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0RHJvcGRvd25NZW51IHtcbiAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgIHRoaXMuZWwgPSBub2RlO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtYXJ0LWRyb3Bkb3duLW1lbnUgPiAuc2RtLWxpc3QgPiBsaScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChuZXcgU21hcnREcm9wZG93bk1lbnVJdGVtKG1lbnVJdGVtW2ldLCBpKSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLnNob3dNZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmhpZGVNZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2hvd01lbnUoKTtcbiAgICB0aGlzLmFwcGVuZFRyaWFyZWFTdHlsZSgpO1xuICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgfVxuXG4gIHNob3dNZW51KGV2ZW50KSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH1cblxuICBoaWRlTWVudShldmVudCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG5cbiAgYXBwZW5kVHJpYXJlYVN0eWxlKCkge1xuICAgIC8vIDxzdHlsZT4gZm9yIHRyaWFyZWFcbiAgICBsZXQgc3R5bGVUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21hcnQtZHJvcGRvd24tbWVudS1zdHlsZScpO1xuICAgIGlmICghc3R5bGVUYWcpIHtcbiAgICAgIHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlVGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgc3R5bGVUYWcuaWQgPSAnc21hcnQtZHJvcGRvd24tbWVudS1zdHlsZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU9iaiA9IHRoaXMuY2FsY3VsYXRlVHJpYXJlYSgpO1xuICAgIHN0eWxlVGFnLmlubmVySFRNTCA9IHRoaXMub2JqZWN0VG9TdHlsZShzdHlsZU9iaik7XG4gIH1cblxuICBjYWxjdWxhdGVUcmlhcmVhKCkge1xuICAgIC8vIFwidHJpYXJlYVwiIGV4dGVuZCBob3ZlciBhcmVhIG9mIG1lbnUgZm9yIG1vdXNlIGN1cnNvcidzIGRpYWdvbmFsIG1vdmVtZW50XG4gICAgY29uc3QgbWVudUxpc3RTdWIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gICAgY29uc3QgbWVudUl0ZW1XaWR0aCA9IG1lbnVMaXN0U3ViLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IG1lbnVJdGVtSGVpZ2h0ID0gbWVudUxpc3RTdWIub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCB0cmlhcmVhU3R5bGVPYmogPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zW2ldLm9wZW5TdWJtZW51KCk7XG5cbiAgICAgIC8vIGNhbGMgYW5nbGUgb2YgZWxldmF0aW9uXG4gICAgICBjb25zdCBlbGV2YXRpb24gPSBNYXRoLmZsb29yKE1hdGguYXRhbjIobWVudUl0ZW1XaWR0aCAqIDAuNSwgbWVudUl0ZW1IZWlnaHQgKiBpICsgbWVudUl0ZW1IZWlnaHQgLyAyKSAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgdHJpYXJlYVN0eWxlT2JqW2AuaXRlbSR7aX06YmVmb3JlYF0gPSB7XG4gICAgICAgICdoZWlnaHQnOiBgJHttZW51SXRlbUhlaWdodCAqIGkgKyBtZW51SXRlbUhlaWdodCAvIDJ9cHhgLFxuICAgICAgICAndHJhbnNmb3JtJzogYHNrZXdYKC0ke2VsZXZhdGlvbn1kZWcpYCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN1Ym1lbnVIZWlnaHQgPSB0aGlzLml0ZW1zW2ldLmVsLnF1ZXJ5U2VsZWN0b3IoJy5zZG0tbGlzdCcpLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IChzdWJtZW51SGVpZ2h0IC0gbWVudUl0ZW1IZWlnaHQgLyAyKSAtIG1lbnVJdGVtSGVpZ2h0ICogaTtcbiAgICAgIC8vIGNhbGMgYW5nbGUgb2YgZGVwcmVzc2lvblxuICAgICAgY29uc3QgZGVwcmVzc2lvbiA9IE1hdGguZmxvb3IoTWF0aC5hdGFuMihtZW51SXRlbVdpZHRoICogMC41LCBoZWlnaHQpICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICB0cmlhcmVhU3R5bGVPYmpbYC5pdGVtJHtpfTphZnRlcmBdID0ge1xuICAgICAgICAnbWFyZ2luLXRvcCc6IGAtJHttZW51SXRlbUhlaWdodCAvIDJ9cHhgLFxuICAgICAgICAnaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgJ3RyYW5zZm9ybSc6IGBza2V3WCgke2RlcHJlc3Npb259ZGVnKWAsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLml0ZW1zW2ldLmNsb3NlU3VibWVudSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmlhcmVhU3R5bGVPYmo7XG4gIH1cblxuICBvYmplY3RUb1N0eWxlKG9iaikge1xuICAgIGxldCBzdHlsZVRleHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgICBzdHlsZVRleHQgKz0gc2VsZWN0b3IgKyAneyc7XG4gICAgICBPYmplY3Qua2V5cyhvYmpbc2VsZWN0b3JdKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBzdHlsZVRleHQgKz0gYCR7cHJvcGVydHl9OiAke29ialtzZWxlY3Rvcl1bcHJvcGVydHldfTtgO1xuICAgICAgfSk7XG4gICAgICBzdHlsZVRleHQgKz0gJ30nO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHlsZVRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTbWFydERyb3Bkb3duTWVudUl0ZW0iLCJlbCIsImluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5TdWJtZW51IiwiYmluZCIsImNsb3NlU3VibWVudSIsInJlbW92ZSIsIlNtYXJ0RHJvcGRvd25NZW51Iiwibm9kZSIsIml0ZW1zIiwibWVudUl0ZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInNob3dNZW51IiwiaGlkZU1lbnUiLCJhcHBlbmRUcmlhcmVhU3R5bGUiLCJldmVudCIsInN0eWxlVGFnIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlkIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwic3R5bGVPYmoiLCJjYWxjdWxhdGVUcmlhcmVhIiwiaW5uZXJIVE1MIiwib2JqZWN0VG9TdHlsZSIsIm1lbnVMaXN0U3ViIiwibWVudUl0ZW1XaWR0aCIsIm9mZnNldFdpZHRoIiwibWVudUl0ZW1IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0cmlhcmVhU3R5bGVPYmoiLCJlbGV2YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJhdGFuMiIsIlBJIiwic3VibWVudUhlaWdodCIsImhlaWdodCIsImRlcHJlc3Npb24iLCJvYmoiLCJzdHlsZVRleHQiLCJrZXlzIiwiZm9yRWFjaCIsInNlbGVjdG9yIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBO2lDQUNQQyxFQUFaLEVBQWdCQyxLQUFoQixFQUF1Qjs7O1NBQ2hCRCxFQUFMLEdBQVVBLEVBQVY7U0FDS0MsS0FBTCxHQUFhQSxLQUFiO1NBQ0tELEVBQUwsQ0FBUUUsU0FBUixDQUFrQkMsR0FBbEIsVUFBNkIsS0FBS0YsS0FBbEM7O1NBRUtELEVBQUwsQ0FBUUksZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0MsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdEM7U0FDS04sRUFBTCxDQUFRSSxnQkFBUixDQUF5QixVQUF6QixFQUFxQyxLQUFLRyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFyQzs7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
