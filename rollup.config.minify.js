import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/js/smart-dropdown-menu.js',
  dest: 'dest/js/smart-dropdown-menu.min.js',
  format: 'umd',
  moduleName: 'SmartDropdownMenu',
  plugins: [
    babel(),
    uglify()
  ]
}
