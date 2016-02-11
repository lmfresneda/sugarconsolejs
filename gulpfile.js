const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
 
gulp.task('babelify', function() {
	console.log("******* Babelizando 'src/sugar.console.es2015.js'");
	return gulp.src('src/sugar.console.es2015.js')
		.pipe(babel())
		.pipe(rename("sugar.console.js"))
		.pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
	console.log("******* Comprimiendo 'dist/sugar.console.js'");
	return gulp.src('dist/sugar.console.js')
		.pipe(uglify())
		.pipe(rename("sugar.console.min.js"))
		.pipe(gulp.dest('dist'));
});


gulp.task("default", function() {
	console.log("******* Escuchando cambios en 'src/sugar.console.es2015.js'");
	gulp.watch('src/sugar.console.es2015.js', ['babelify', "uglify"]);
});