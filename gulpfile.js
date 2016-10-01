const gulp = require('gulp');
const webpack = require('webpack-stream');
const webp = require('webpack');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const KarmaServer = require('karma').Server;

var apiFiles = ['./*.js', './lib/*.js', './models/*.js', './routes/*.js'];
var testFiles = ['./test/*test.js'];
var unitFiles = ['./test/unit/**/*test.js'];
var appFiles = ['./app/**/*.js'];

gulp.task('webpack:dev', ['html:dev', 'css:dev'], () => {
  return gulp.src('app/js/entry.js')
    .pipe(webpack({
      output: {
        devtool: 'source-map',
        filename: 'bundle.js'
      },
      plugins: [
        new webp.EnvironmentPlugin([
          'PORT'
        ])
      ]
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('webpack:test', () => {
  return gulp.src('test/unit/test_entry.js')
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.html$/,
            loader: 'html'
          }
        ]
      }
    }))
    .pipe(gulp.dest('./test'));
});

gulp.task('html:dev', () => {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:dev', () => {
  gulp.src('./app/**/*.scss')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('css:dev', ['sass:dev'], () => {
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('./build'));
});

gulp.task('test:mocha', () => {
  return gulp.src('./test/*test.js')
    .pipe(mocha());
});

gulp.task('test:karma', ['webpack:test'], (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('lint:api', () => {
  return gulp.src(apiFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  return gulp.src(testFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:app', () => {
  return gulp.src(appFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:unit', () => {
  return gulp.src(unitFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('build:dev', ['webpack:dev']);
gulp.task('test', ['test:mocha', 'test:karma']);
gulp.task('lint', ['lint:api', 'lint:test','lint:unit', 'lint:app']);

gulp.task('default', ['lint', 'test']);
