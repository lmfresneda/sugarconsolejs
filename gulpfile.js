const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
 
gulp.task('babelify', function() {
	console.log("******* Babelizando 'src/sugarconsole.js'");
	return gulp.src('src/sugarconsole.js')
		.pipe(babel())
		.pipe(rename("sugarconsole.js"))
		.pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
	console.log("******* Comprimiendo 'dist/sugarconsole.js'");
	return gulp.src('dist/sugarconsole.js')
		.pipe(uglify())
		.pipe(rename("sugarconsole.min.js"))
		.pipe(gulp.dest('dist'));
});


gulp.task("default", function() {
	console.log("******* Escuchando cambios en 'src/sugarconsole.js'");
	gulp.watch('src/sugarconsole.js', ['babelify', "uglify"]);
});