import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/js/smart-dropdown-menu.js',
  dest: 'dist/js/smart-dropdown-menu.js',
  format: 'umd',
  moduleName: 'SmartDropdownMenu',
  plugins: [
    babel()
  ]
}
