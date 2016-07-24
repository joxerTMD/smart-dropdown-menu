import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sass        from 'gulp-sass'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins';

const bs = browserSync.create();
const $ = gulpLoadPlugins();

const bundleJS = (isWatch, isUglify) => {
  const src = 'src/js/app.js';
  const bundler = browserify(src, {
    debug: true,
    cache: {},
    packageCache: {},
  });

  bundler.transform(babelify);

  const bundle = () => {
    return bundler.bundle()
      .on('error', (err) => {
        $.util.log('browserify error', err);
      })
      .pipe(source('smart-dropdown-menu.js'))
      .pipe(buffer())
      .pipe(isUglify ? $.sourcemaps.init({loadMaps: true}) : $.util.noop())
      .pipe(isUglify ? $.uglify() : $.util.noop())
      .pipe(isUglify ? $.sourcemaps.write() : $.util.noop())
      .pipe(gulp.dest('dest/js'));
  };

  if (isWatch) {
    bundler.plugin(watchify);
    bundler.on('update', bundle);
  }

  bundler.on('log', $.util.log);

  return bundle();
};

gulp.task('js:dev', () => {
  bundleJS(false, false);
});

gulp.task('js', () => {
  bundleJS(false, true)
});

gulp.task('css', () => {
  gulp.src('src/scss/**/*.scss')
      .pipe(sass())
      .on('error', (err) => console.log('Error: ' + err.message) )
      .pipe(gulp.dest('dest/css/'));
});

gulp.task('dev', ['css', 'js'], () => {
  bs.init({
    server: {
      baseDir: './',
    },
    open: false,
  });
  bundleJS(true, true);
  gulp.watch('src/scss/**/*.scss', ['css']);
});
