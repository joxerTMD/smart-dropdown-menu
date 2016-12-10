const rollup = require('rollup');
const licenseList = require('license-list');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const chokidar = require('chokidar');
const uglifySaveLicense = require('uglify-save-license');

const isProduction = process.env.NODE_ENV === 'production';

const formatLicenseText = (packages) => {
  let licenseText = '';
  Object.keys(packages).forEach((packageId) => {
    const pkg = packages[packageId];
    licenseText = `/**
 * ${pkg.name}
 *
 * Copyright (c) 2016 ${pkg.author.name}
 *
 * This software is released under the ${pkg.license} license
 */`;
  });
  return licenseText;
};

const build = (isUglify, appendSourceMap) => {
  let cache;
  let rollupPlugins = [babel()];
  let dest = 'dist/js/smart-dropdown-menu.js';
  if (isUglify) {
    dest = 'dist/js/smart-dropdown-menu.min.js';
    rollupPlugins.push(uglify({
      output: {
        comments: uglifySaveLicense,
      },
    }));
  }

  return Promise.all([rollup.rollup({
    entry: 'src/js/smart-dropdown-menu.js',
    cache: cache,
    plugins: rollupPlugins,
  }), licenseList('.')]).then(([bundle, packages]) => {
    bundle.write({
      dest: dest,
      format: 'umd',
      moduleName: 'SmartDropdownMenu',
      banner: formatLicenseText(packages),
      sourceMap: appendSourceMap ? 'inline' : false,
    }).then(() => {
      console.log(`write: ${dest}`);
    });
  });
};

if (isProduction) {
  build(true, false);
  build(false, false);
} else {
  const watcher = chokidar.watch('src/js/**/*.js')
  const doBuild = (path) => {
    console.log(`build: ${path}`);
    build(false, true);
  };
  watcher
    .on('add', doBuild)
    .on('change', doBuild)
    .on('error', (error) => {
      console.log(`error: ${error}`);
    });
}
