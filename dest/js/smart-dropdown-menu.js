!function e(t,n,r){function i(u,s){if(!n[u]){if(!t[u]){var a="function"==typeof require&&require;if(!s&&a)return a(u,!0);if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[u]={exports:{}};t[u][0].call(c.exports,function(e){var n=t[u][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=e("./smart-dropdown-menu"),o=r(i);window.SmartDropdownMenu=o["default"]},{"./smart-dropdown-menu":3}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,n){r(this,e),this.el=t,this.index=n,this.el.classList.add("item"+this.index),this.el.addEventListener("mouseover",this.openSubmenu.bind(this)),this.el.addEventListener("mouseout",this.closeSubmenu.bind(this))}return i(e,[{key:"openSubmenu",value:function(){this.el.classList.add("show")}},{key:"closeSubmenu",value:function(){this.el.classList.remove("show")}}]),e}();n["default"]=o},{}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("./smart-dropdown-menu-item"),s=r(u),a=function(){function e(t){i(this,e),this.el=t,this.items=[];for(var n=document.querySelectorAll(".smart-dropdown-menu > .sdm-list > li"),r=0;r<n.length;r++)this.items.push(new s["default"](n[r],r));this.el.addEventListener("mouseover",this.showMenu.bind(this)),this.el.addEventListener("mouseout",this.hideMenu.bind(this)),this.showMenu(),this.appendTriareaStyle(),this.hideMenu()}return o(e,[{key:"showMenu",value:function(e){this.el.classList.add("show")}},{key:"hideMenu",value:function(e){this.el.classList.remove("show")}},{key:"appendTriareaStyle",value:function(){var e=document.getElementById("smart-dropdown-menu-style");e||(e=document.createElement("style"),e.type="text/css",e.id="smart-dropdown-menu-style",document.querySelector("head").appendChild(e));var t=this.calculateTriarea();e.innerHTML=this.objectToStyle(t)}},{key:"calculateTriarea",value:function(){for(var e=this.el.querySelector("li"),t=e.offsetWidth,n=e.offsetHeight,r={},i=0;i<this.items.length;i++){this.items[i].openSubmenu();var o=Math.floor(180*Math.atan2(.5*t,n*i+n/2)/Math.PI);r[".item"+i+":before"]={height:n*i+n/2+"px",transform:"skewX(-"+o+"deg)"};var u=this.items[i].el.querySelector(".sdm-list").offsetHeight,s=u-n/2-n*i,a=Math.floor(180*Math.atan2(.5*t,s)/Math.PI);r[".item"+i+":after"]={"margin-top":"-"+n/2+"px",height:s+"px",transform:"skewX("+a+"deg)"},this.items[i].closeSubmenu()}return r}},{key:"objectToStyle",value:function(e){var t="";return Object.keys(e).forEach(function(n){t+=n+"{",Object.keys(e[n]).forEach(function(r){t+=r+": "+e[n][r]+";"}),t+="}"}),t}}]),e}();n["default"]=a},{"./smart-dropdown-menu-item":2}]},{},[1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzbWFydC1kcm9wZG93bi1tZW51LmpzIiwic3JjL2pzL2FwcC5qcyIsInNyYy9qcy9zbWFydC1kcm9wZG93bi1tZW51LWl0ZW0uanMiLCJzcmMvanMvc21hcnQtZHJvcGRvd24tbWVudS5qcyJdLCJuYW1lcyI6WyJlIiwidCIsIm4iLCJyIiwicyIsIm8iLCJ1IiwiYSIsInJlcXVpcmUiLCJpIiwiZiIsIkVycm9yIiwiY29kZSIsImwiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfc21hcnREcm9wZG93bk1lbnUiLCJfc21hcnREcm9wZG93bk1lbnUyIiwid2luZG93IiwiU21hcnREcm9wZG93bk1lbnUiLCIuL3NtYXJ0LWRyb3Bkb3duLW1lbnUiLCIyIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiU21hcnREcm9wZG93bk1lbnVJdGVtIiwiZWwiLCJpbmRleCIsInRoaXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlblN1Ym1lbnUiLCJiaW5kIiwiY2xvc2VTdWJtZW51IiwicmVtb3ZlIiwiMyIsIl9zbWFydERyb3Bkb3duTWVudUl0ZW0iLCJfc21hcnREcm9wZG93bk1lbnVJdGVtMiIsIm5vZGUiLCJpdGVtcyIsIm1lbnVJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHVzaCIsInNob3dNZW51IiwiaGlkZU1lbnUiLCJhcHBlbmRUcmlhcmVhU3R5bGUiLCJldmVudCIsInN0eWxlVGFnIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlkIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwic3R5bGVPYmoiLCJjYWxjdWxhdGVUcmlhcmVhIiwiaW5uZXJIVE1MIiwib2JqZWN0VG9TdHlsZSIsIm1lbnVMaXN0U3ViIiwibWVudUl0ZW1XaWR0aCIsIm9mZnNldFdpZHRoIiwibWVudUl0ZW1IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0cmlhcmVhU3R5bGVPYmoiLCJlbGV2YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJhdGFuMiIsIlBJIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwic3VibWVudUhlaWdodCIsImRlcHJlc3Npb24iLCJtYXJnaW4tdG9wIiwic3R5bGVUZXh0Iiwia2V5cyIsImZvckVhY2giLCJzZWxlY3RvciIsInByb3BlcnR5IiwiLi9zbWFydC1kcm9wZG93bi1tZW51LWl0ZW0iXSwibWFwcGluZ3MiOiJDQUFBLFFBQUFBLEdBQUFDLEVBQUFDLEVBQUFDLEdBQUEsUUFBQUMsR0FBQUMsRUFBQUMsR0FBQSxJQUFBSixFQUFBRyxHQUFBLENBQUEsSUFBQUosRUFBQUksR0FBQSxDQUFBLEdBQUFFLEdBQUEsa0JBQUFDLFVBQUFBLE9BQUEsS0FBQUYsR0FBQUMsRUFBQSxNQUFBQSxHQUFBRixHQUFBLEVBQUEsSUFBQUksRUFBQSxNQUFBQSxHQUFBSixHQUFBLEVBQUEsSUFBQUssR0FBQSxHQUFBQyxPQUFBLHVCQUFBTixFQUFBLElBQUEsTUFBQUssR0FBQUUsS0FBQSxtQkFBQUYsRUFBQSxHQUFBRyxHQUFBWCxFQUFBRyxJQUFBUyxXQUFBYixHQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVBQUFDLFFBQUEsU0FBQWQsR0FBQSxHQUFBRSxHQUFBRCxFQUFBSSxHQUFBLEdBQUFMLEVBQUEsT0FBQUksR0FBQUYsRUFBQUEsRUFBQUYsSUFBQWEsRUFBQUEsRUFBQUMsUUFBQWQsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxNQUFBRCxHQUFBRyxHQUFBUyxRQUFBLElBQUEsR0FBQUwsR0FBQSxrQkFBQUQsVUFBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxJQUFBRCxFQUFBRCxFQUFBRSxHQUFBLE9BQUFELEtBQUFhLEdBQUEsU0FBQVQsRUFBQVUsRUFBQUosR0NDQSxZQU1BLFNBQVNLLEdBQXVCQyxHQUFPLE1BQU9BLElBQU9BLEVBQUlDLFdBQWFELEdBQVFFLFVBQVNGLEdDUHZGLEdBQUFHLEdBQUFmLEVBQUEseUJES0lnQixFQUFzQkwsRUFBdUJJLEVDSGpERSxRQUFPQyxrQkFBUEYsRUFBQUEsYURTR0csd0JBQXdCLElBQUlDLEdBQUcsU0FBU3BCLEVBQVFVLEVBQU9KLEdBQzFELFlBUUEsU0FBU2UsR0FBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FOaEhDLE9BQU9DLGVBQWVwQixFQUFTLGNBQzdCcUIsT0FBTyxHQUdULElBQUlDLEdBQWUsV0FBYyxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUk5QixHQUFJLEVBQUdBLEVBQUk4QixFQUFNdkIsT0FBUVAsSUFBSyxDQUFFLEdBQUkrQixHQUFhRCxFQUFNOUIsRUFBSStCLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTVYsT0FBT0MsZUFBZUksRUFBUUUsRUFBV0ksSUFBS0osSUFBaUIsTUFBTyxVQUFVVCxFQUFhYyxFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVIsRUFBaUJOLEVBQVlnQixVQUFXRixHQUFpQkMsR0FBYVQsRUFBaUJOLEVBQWFlLEdBQXFCZixNRWxCM2dCaUIsRUZzQk8sV0VyQjFCLFFBQUFBLEdBQVlDLEVBQUlDLEdBQU9yQixFQUFBc0IsS0FBQUgsR0FDckJHLEtBQUtGLEdBQUtBLEVBQ1ZFLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtGLEdBQUdHLFVBQVVDLElBQWxCLE9BQTZCRixLQUFLRCxPQUVsQ0MsS0FBS0YsR0FBR0ssaUJBQWlCLFlBQWFILEtBQUtJLFlBQVlDLEtBQUtMLE9BQzVEQSxLQUFLRixHQUFHSyxpQkFBaUIsV0FBWUgsS0FBS00sYUFBYUQsS0FBS0wsT0Z1QzlELE1BWkFmLEdBQWFZLElBQ1hKLElBQUssY0FDTFQsTUFBTyxXRXpCUGdCLEtBQUtGLEdBQUdHLFVBQVVDLElBQUksV0Y2QnRCVCxJQUFLLGVBQ0xULE1BQU8sV0UzQlBnQixLQUFLRixHQUFHRyxVQUFVTSxPQUFPLFlGZ0NwQlYsSUFHVGxDLEdBQUFBLFdFakRxQmtDLE9GbURmVyxHQUFHLFNBQVNuRCxFQUFRVSxFQUFPSixHQUNqQyxZQVlBLFNBQVNLLEdBQXVCQyxHQUFPLE1BQU9BLElBQU9BLEVBQUlDLFdBQWFELEdBQVFFLFVBQVNGLEdBRXZGLFFBQVNTLEdBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBWmhIQyxPQUFPQyxlQUFlcEIsRUFBUyxjQUM3QnFCLE9BQU8sR0FHVCxJQUFJQyxHQUFlLFdBQWMsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJOUIsR0FBSSxFQUFHQSxFQUFJOEIsRUFBTXZCLE9BQVFQLElBQUssQ0FBRSxHQUFJK0IsR0FBYUQsRUFBTTlCLEVBQUkrQixHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1WLE9BQU9DLGVBQWVJLEVBQVFFLEVBQVdJLElBQUtKLElBQWlCLE1BQU8sVUFBVVQsRUFBYWMsRUFBWUMsR0FBaUosTUFBOUhELElBQVlSLEVBQWlCTixFQUFZZ0IsVUFBV0YsR0FBaUJDLEdBQWFULEVBQWlCTixFQUFhZSxHQUFxQmYsTUcxRGhpQjZCLEVBQUFwRCxFQUFBLDhCSDhESXFELEVBQTBCMUMsRUFBdUJ5QyxHRzVEaENsQyxFSGtFRyxXR2pFdEIsUUFBQUEsR0FBWW9DLEdBQU1qQyxFQUFBc0IsS0FBQXpCLEdBQ2hCeUIsS0FBS0YsR0FBS2EsRUFDVlgsS0FBS1ksUUFHTCxLQUFLLEdBRENDLEdBQVdDLFNBQVNDLGlCQUFpQix5Q0FDbEN6RCxFQUFJLEVBQUdBLEVBQUl1RCxFQUFTaEQsT0FBUVAsSUFDbkMwQyxLQUFLWSxNQUFNSSxLQUFLLEdBQUFOLEdBQUFBLFdBQTBCRyxFQUFTdkQsR0FBSUEsR0FHekQwQyxNQUFLRixHQUFHSyxpQkFBaUIsWUFBYUgsS0FBS2lCLFNBQVNaLEtBQUtMLE9BQ3pEQSxLQUFLRixHQUFHSyxpQkFBaUIsV0FBWUgsS0FBS2tCLFNBQVNiLEtBQUtMLE9BQ3hEQSxLQUFLaUIsV0FDTGpCLEtBQUttQixxQkFDTG5CLEtBQUtrQixXSGdKUCxNQXpFQWpDLEdBQWFWLElBQ1hrQixJQUFLLFdBQ0xULE1BQU8sU0d0RUFvQyxHQUNQcEIsS0FBS0YsR0FBR0csVUFBVUMsSUFBSSxXSHlFdEJULElBQUssV0FDTFQsTUFBTyxTR3ZFQW9DLEdBQ1BwQixLQUFLRixHQUFHRyxVQUFVTSxPQUFPLFdIMEV6QmQsSUFBSyxxQkFDTFQsTUFBTyxXR3RFUCxHQUFJcUMsR0FBV1AsU0FBU1EsZUFBZSw0QkFDbENELEtBQ0hBLEVBQVdQLFNBQVNTLGNBQWMsU0FDbENGLEVBQVNHLEtBQU8sV0FDaEJILEVBQVNJLEdBQUssNEJBQ2RYLFNBQVNZLGNBQWMsUUFBUUMsWUFBWU4sR0FFN0MsSUFBTU8sR0FBVzVCLEtBQUs2QixrQkFDdEJSLEdBQVNTLFVBQVk5QixLQUFLK0IsY0FBY0gsTUgyRXhDbkMsSUFBSyxtQkFDTFQsTUFBTyxXR2xFUCxJQUFJLEdBTEVnRCxHQUFjaEMsS0FBS0YsR0FBRzRCLGNBQWMsTUFDcENPLEVBQWdCRCxFQUFZRSxZQUM1QkMsRUFBaUJILEVBQVlJLGFBQy9CQyxLQUVJL0UsRUFBSSxFQUFHQSxFQUFJMEMsS0FBS1ksTUFBTS9DLE9BQVFQLElBQUssQ0FDekMwQyxLQUFLWSxNQUFNdEQsR0FBRzhDLGFBR2QsSUFBTWtDLEdBQVlDLEtBQUtDLE1BQWlGLElBQTNFRCxLQUFLRSxNQUFzQixHQUFoQlIsRUFBcUJFLEVBQWlCN0UsRUFBSTZFLEVBQWlCLEdBQVdJLEtBQUtHLEdBQ25ITCxHQUFBLFFBQXdCL0UsRUFBeEIsWUFDRXFGLE9BQWFSLEVBQWlCN0UsRUFBSTZFLEVBQWlCLEVBQW5ELEtBQ0FTLFVBQUEsVUFBdUJOLEVBQXZCLE9BR0YsSUFBTU8sR0FBZ0I3QyxLQUFLWSxNQUFNdEQsR0FBR3dDLEdBQUc0QixjQUFjLGFBQWFVLGFBQzVETyxFQUFVRSxFQUFnQlYsRUFBaUIsRUFBS0EsRUFBaUI3RSxFQUVqRXdGLEVBQWFQLEtBQUtDLE1BQWdELElBQTFDRCxLQUFLRSxNQUFzQixHQUFoQlIsRUFBcUJVLEdBQWdCSixLQUFLRyxHQUNuRkwsR0FBQSxRQUF3Qi9FLEVBQXhCLFdBQ0V5RixhQUFBLElBQWtCWixFQUFpQixFQUFuQyxLQUNBUSxPQUFhQSxFQUFiLEtBQ0FDLFVBQUEsU0FBc0JFLEVBQXRCLFFBR0Y5QyxLQUFLWSxNQUFNdEQsR0FBR2dELGVBR2hCLE1BQU8rQixNSDRFUDVDLElBQUssZ0JBQ0xULE1BQU8sU0cxRUtmLEdBQ1osR0FBSStFLEdBQVksRUFRaEIsT0FQQWxFLFFBQU9tRSxLQUFLaEYsR0FBS2lGLFFBQVEsU0FBQ0MsR0FDeEJILEdBQWFHLEVBQVcsSUFDeEJyRSxPQUFPbUUsS0FBS2hGLEVBQUlrRixJQUFXRCxRQUFRLFNBQUNFLEdBQ2xDSixHQUFnQkksRUFBaEIsS0FBNkJuRixFQUFJa0YsR0FBVUMsR0FBM0MsTUFFRkosR0FBYSxNQUVSQSxNSDhFRnpFLElBR1RaLEdBQUFBLFdHaktxQlksSUhtS2xCOEUsNkJBQTZCLFNBQVMiLCJmaWxlIjoic21hcnQtZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3NtYXJ0RHJvcGRvd25NZW51ID0gcmVxdWlyZSgnLi9zbWFydC1kcm9wZG93bi1tZW51Jyk7XG5cbnZhciBfc21hcnREcm9wZG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc21hcnREcm9wZG93bk1lbnUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG53aW5kb3cuU21hcnREcm9wZG93bk1lbnUgPSBfc21hcnREcm9wZG93bk1lbnUyLmRlZmF1bHQ7XG5cbn0se1wiLi9zbWFydC1kcm9wZG93bi1tZW51XCI6M31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU21hcnREcm9wZG93bk1lbnVJdGVtID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTbWFydERyb3Bkb3duTWVudUl0ZW0oZWwsIGluZGV4KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNtYXJ0RHJvcGRvd25NZW51SXRlbSk7XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaXRlbScgKyB0aGlzLmluZGV4KTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vcGVuU3VibWVudS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5jbG9zZVN1Ym1lbnUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU21hcnREcm9wZG93bk1lbnVJdGVtLCBbe1xuICAgIGtleTogJ29wZW5TdWJtZW51JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlblN1Ym1lbnUoKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZVN1Ym1lbnUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZVN1Ym1lbnUoKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU21hcnREcm9wZG93bk1lbnVJdGVtO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTbWFydERyb3Bkb3duTWVudUl0ZW07XG5cbn0se31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NtYXJ0RHJvcGRvd25NZW51SXRlbSA9IHJlcXVpcmUoJy4vc21hcnQtZHJvcGRvd24tbWVudS1pdGVtJyk7XG5cbnZhciBfc21hcnREcm9wZG93bk1lbnVJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NtYXJ0RHJvcGRvd25NZW51SXRlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTbWFydERyb3Bkb3duTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU21hcnREcm9wZG93bk1lbnUobm9kZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbWFydERyb3Bkb3duTWVudSk7XG5cbiAgICB0aGlzLmVsID0gbm9kZTtcbiAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICB2YXIgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc21hcnQtZHJvcGRvd24tbWVudSA+IC5zZG0tbGlzdCA+IGxpJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKG5ldyBfc21hcnREcm9wZG93bk1lbnVJdGVtMi5kZWZhdWx0KG1lbnVJdGVtW2ldLCBpKSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLnNob3dNZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmhpZGVNZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2hvd01lbnUoKTtcbiAgICB0aGlzLmFwcGVuZFRyaWFyZWFTdHlsZSgpO1xuICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbWFydERyb3Bkb3duTWVudSwgW3tcbiAgICBrZXk6ICdzaG93TWVudScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoaWRlTWVudScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhcHBlbmRUcmlhcmVhU3R5bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUcmlhcmVhU3R5bGUoKSB7XG4gICAgICAvLyA8c3R5bGU+IGZvciB0cmlhcmVhXG4gICAgICB2YXIgc3R5bGVUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21hcnQtZHJvcGRvd24tbWVudS1zdHlsZScpO1xuICAgICAgaWYgKCFzdHlsZVRhZykge1xuICAgICAgICBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlVGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBzdHlsZVRhZy5pZCA9ICdzbWFydC1kcm9wZG93bi1tZW51LXN0eWxlJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuY2FsY3VsYXRlVHJpYXJlYSgpO1xuICAgICAgc3R5bGVUYWcuaW5uZXJIVE1MID0gdGhpcy5vYmplY3RUb1N0eWxlKHN0eWxlT2JqKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxjdWxhdGVUcmlhcmVhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlVHJpYXJlYSgpIHtcbiAgICAgIC8vIFwidHJpYXJlYVwiIGV4dGVuZCBob3ZlciBhcmVhIG9mIG1lbnUgZm9yIG1vdXNlIGN1cnNvcidzIGRpYWdvbmFsIG1vdmVtZW50XG4gICAgICB2YXIgbWVudUxpc3RTdWIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gICAgICB2YXIgbWVudUl0ZW1XaWR0aCA9IG1lbnVMaXN0U3ViLm9mZnNldFdpZHRoO1xuICAgICAgdmFyIG1lbnVJdGVtSGVpZ2h0ID0gbWVudUxpc3RTdWIub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIHRyaWFyZWFTdHlsZU9iaiA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pdGVtc1tpXS5vcGVuU3VibWVudSgpO1xuXG4gICAgICAgIC8vIGNhbGMgYW5nbGUgb2YgZWxldmF0aW9uXG4gICAgICAgIHZhciBlbGV2YXRpb24gPSBNYXRoLmZsb29yKE1hdGguYXRhbjIobWVudUl0ZW1XaWR0aCAqIDAuNSwgbWVudUl0ZW1IZWlnaHQgKiBpICsgbWVudUl0ZW1IZWlnaHQgLyAyKSAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICB0cmlhcmVhU3R5bGVPYmpbJy5pdGVtJyArIGkgKyAnOmJlZm9yZSddID0ge1xuICAgICAgICAgICdoZWlnaHQnOiBtZW51SXRlbUhlaWdodCAqIGkgKyBtZW51SXRlbUhlaWdodCAvIDIgKyAncHgnLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiAnc2tld1goLScgKyBlbGV2YXRpb24gKyAnZGVnKSdcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3VibWVudUhlaWdodCA9IHRoaXMuaXRlbXNbaV0uZWwucXVlcnlTZWxlY3RvcignLnNkbS1saXN0Jykub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgaGVpZ2h0ID0gc3VibWVudUhlaWdodCAtIG1lbnVJdGVtSGVpZ2h0IC8gMiAtIG1lbnVJdGVtSGVpZ2h0ICogaTtcbiAgICAgICAgLy8gY2FsYyBhbmdsZSBvZiBkZXByZXNzaW9uXG4gICAgICAgIHZhciBkZXByZXNzaW9uID0gTWF0aC5mbG9vcihNYXRoLmF0YW4yKG1lbnVJdGVtV2lkdGggKiAwLjUsIGhlaWdodCkgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgdHJpYXJlYVN0eWxlT2JqWycuaXRlbScgKyBpICsgJzphZnRlciddID0ge1xuICAgICAgICAgICdtYXJnaW4tdG9wJzogJy0nICsgbWVudUl0ZW1IZWlnaHQgLyAyICsgJ3B4JyxcbiAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogJ3NrZXdYKCcgKyBkZXByZXNzaW9uICsgJ2RlZyknXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pdGVtc1tpXS5jbG9zZVN1Ym1lbnUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyaWFyZWFTdHlsZU9iajtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvYmplY3RUb1N0eWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2JqZWN0VG9TdHlsZShvYmopIHtcbiAgICAgIHZhciBzdHlsZVRleHQgPSAnJztcbiAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgc3R5bGVUZXh0ICs9IHNlbGVjdG9yICsgJ3snO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmpbc2VsZWN0b3JdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgIHN0eWxlVGV4dCArPSBwcm9wZXJ0eSArICc6ICcgKyBvYmpbc2VsZWN0b3JdW3Byb3BlcnR5XSArICc7JztcbiAgICAgICAgfSk7XG4gICAgICAgIHN0eWxlVGV4dCArPSAnfSc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHlsZVRleHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNtYXJ0RHJvcGRvd25NZW51O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTbWFydERyb3Bkb3duTWVudTtcblxufSx7XCIuL3NtYXJ0LWRyb3Bkb3duLW1lbnUtaXRlbVwiOjJ9XX0se30sWzFdKVxuXG4iLCJpbXBvcnQgU21hcnREcm9wZG93bk1lbnUgZnJvbSAnLi9zbWFydC1kcm9wZG93bi1tZW51Jztcblxud2luZG93LlNtYXJ0RHJvcGRvd25NZW51ID0gU21hcnREcm9wZG93bk1lbnU7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydERyb3Bkb3duTWVudUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihlbCwgaW5kZXgpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChgaXRlbSR7dGhpcy5pbmRleH1gKVxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9wZW5TdWJtZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmNsb3NlU3VibWVudS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9wZW5TdWJtZW51KCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9XG4gIGNsb3NlU3VibWVudSgpIHtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNtYXJ0RHJvcGRvd25NZW51SXRlbSBmcm9tICcuL3NtYXJ0LWRyb3Bkb3duLW1lbnUtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0RHJvcGRvd25NZW51IHtcbiAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgIHRoaXMuZWwgPSBub2RlO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtYXJ0LWRyb3Bkb3duLW1lbnUgPiAuc2RtLWxpc3QgPiBsaScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChuZXcgU21hcnREcm9wZG93bk1lbnVJdGVtKG1lbnVJdGVtW2ldLCBpKSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLnNob3dNZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmhpZGVNZW51LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2hvd01lbnUoKTtcbiAgICB0aGlzLmFwcGVuZFRyaWFyZWFTdHlsZSgpO1xuICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgfVxuXG4gIHNob3dNZW51KGV2ZW50KSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH1cblxuICBoaWRlTWVudShldmVudCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG5cbiAgYXBwZW5kVHJpYXJlYVN0eWxlKCkge1xuICAgIC8vIDxzdHlsZT4gZm9yIHRyaWFyZWFcbiAgICBsZXQgc3R5bGVUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21hcnQtZHJvcGRvd24tbWVudS1zdHlsZScpO1xuICAgIGlmICghc3R5bGVUYWcpIHtcbiAgICAgIHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlVGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgc3R5bGVUYWcuaWQgPSAnc21hcnQtZHJvcGRvd24tbWVudS1zdHlsZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU9iaiA9IHRoaXMuY2FsY3VsYXRlVHJpYXJlYSgpO1xuICAgIHN0eWxlVGFnLmlubmVySFRNTCA9IHRoaXMub2JqZWN0VG9TdHlsZShzdHlsZU9iaik7XG4gIH1cblxuICBjYWxjdWxhdGVUcmlhcmVhKCkge1xuICAgIC8vIFwidHJpYXJlYVwiIGV4dGVuZCBob3ZlciBhcmVhIG9mIG1lbnUgZm9yIG1vdXNlIGN1cnNvcidzIGRpYWdvbmFsIG1vdmVtZW50XG4gICAgY29uc3QgbWVudUxpc3RTdWIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gICAgY29uc3QgbWVudUl0ZW1XaWR0aCA9IG1lbnVMaXN0U3ViLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IG1lbnVJdGVtSGVpZ2h0ID0gbWVudUxpc3RTdWIub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCB0cmlhcmVhU3R5bGVPYmogPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zW2ldLm9wZW5TdWJtZW51KCk7XG5cbiAgICAgIC8vIGNhbGMgYW5nbGUgb2YgZWxldmF0aW9uXG4gICAgICBjb25zdCBlbGV2YXRpb24gPSBNYXRoLmZsb29yKE1hdGguYXRhbjIobWVudUl0ZW1XaWR0aCAqIDAuNSwgbWVudUl0ZW1IZWlnaHQgKiBpICsgbWVudUl0ZW1IZWlnaHQgLyAyKSAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgdHJpYXJlYVN0eWxlT2JqW2AuaXRlbSR7aX06YmVmb3JlYF0gPSB7XG4gICAgICAgICdoZWlnaHQnOiBgJHttZW51SXRlbUhlaWdodCAqIGkgKyBtZW51SXRlbUhlaWdodCAvIDJ9cHhgLFxuICAgICAgICAndHJhbnNmb3JtJzogYHNrZXdYKC0ke2VsZXZhdGlvbn1kZWcpYCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN1Ym1lbnVIZWlnaHQgPSB0aGlzLml0ZW1zW2ldLmVsLnF1ZXJ5U2VsZWN0b3IoJy5zZG0tbGlzdCcpLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IChzdWJtZW51SGVpZ2h0IC0gbWVudUl0ZW1IZWlnaHQgLyAyKSAtIG1lbnVJdGVtSGVpZ2h0ICogaTtcbiAgICAgIC8vIGNhbGMgYW5nbGUgb2YgZGVwcmVzc2lvblxuICAgICAgY29uc3QgZGVwcmVzc2lvbiA9IE1hdGguZmxvb3IoTWF0aC5hdGFuMihtZW51SXRlbVdpZHRoICogMC41LCBoZWlnaHQpICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICB0cmlhcmVhU3R5bGVPYmpbYC5pdGVtJHtpfTphZnRlcmBdID0ge1xuICAgICAgICAnbWFyZ2luLXRvcCc6IGAtJHttZW51SXRlbUhlaWdodCAvIDJ9cHhgLFxuICAgICAgICAnaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgJ3RyYW5zZm9ybSc6IGBza2V3WCgke2RlcHJlc3Npb259ZGVnKWAsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLml0ZW1zW2ldLmNsb3NlU3VibWVudSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmlhcmVhU3R5bGVPYmo7XG4gIH1cblxuICBvYmplY3RUb1N0eWxlKG9iaikge1xuICAgIGxldCBzdHlsZVRleHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgICBzdHlsZVRleHQgKz0gc2VsZWN0b3IgKyAneyc7XG4gICAgICBPYmplY3Qua2V5cyhvYmpbc2VsZWN0b3JdKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBzdHlsZVRleHQgKz0gYCR7cHJvcGVydHl9OiAke29ialtzZWxlY3Rvcl1bcHJvcGVydHldfTtgO1xuICAgICAgfSk7XG4gICAgICBzdHlsZVRleHQgKz0gJ30nO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHlsZVRleHQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
