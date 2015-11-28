import gulp from 'gulp';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';
import istanbul from 'gulp-istanbul';
import coveralls from 'gulp-coveralls';
import path from 'path';
import { Instrumenter } from 'isparta';
import peg from 'gulp-peg';

const babelConfig = {
  stage: 0,
};

gulp.task('compile-peg', () => {
  return gulp.src(['src/**/*.peg'])
    .pipe(peg({
      exportVar: 'module.exports',
    }).on('error', (err) => {
      console.log(err);
    }))
    .pipe(gulp.dest('./src'))
});

gulp.task('pre-test', () => {
  return gulp.src(['src/**/*.js', '!src/parser/**'])
    .pipe(istanbul({
      dir: './coverage',
      instrumenter: Instrumenter,
      includeUntested: true,
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  return gulp.src('./tests/**/*.js')
    .pipe(babel(babelConfig))
    .pipe(mocha({
      timeout: 20000,
      reporter: 'spec',
    }))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({
      thresholds: {
        global: 90,
      },
    }));
 });

gulp.task('coveralls', ['test'], () => {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('build', ['compile-peg'], () => {
  return gulp.src('./src/**/*.{js,jsx}')
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.doneCallback = (err) => {
  process.exit(err ? 1 : 0);
};
