import gulp from 'gulp';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';
import path from 'path';
import peg from 'gulp-peg';

//import prepareCLDR from './src/prepareCLDR';

gulp.task('prepare-cldr', () => {
  //prepareCLDR();
});

gulp.task('compile-peg', () =>
  gulp.src(['src/**/*.peg'])
    .pipe(peg({
      exportVar: 'module.exports',
    }))
    .pipe(gulp.dest('./src'))
);

gulp.task('build', ['compile-peg', 'prepare-cldr'], () =>
  gulp.src('./src/**/*.{js,jsx}')
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
);
