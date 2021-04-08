const gulp = require('gulp');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const scss = require("gulp-scss");
 
gulp.task('concat', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('eslint', function() {
  return gulp.src('./src/js/*.js')
    .pipe(eslint({
    	"rules": {
    		"semi": ["error", "always"],
    		"quotes": ["error", "single"],
            "no-console": "error"
    	},
    	"parserOptions": { "ecmaVersion": "2018" }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("scss", () => {
  return gulp.src("./src/scss/*.scss")
    .pipe(scss({"bundleExec": false}))
    .pipe(gulp.dest("./dist/css"));
});


exports.build = gulp.series('eslint' ,'concat', 'scss');