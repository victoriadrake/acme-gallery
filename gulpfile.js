const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  pug = require('gulp-pug'),
  fs = require('fs'),
  path = 'images/';

gulp.task("generate", function () {

  // If previously generated list of images exists, empty it
  fs.writeFile('images.pug', '', function (err) {
    if (err) throw err;
    console.log('Cleared file.');
  });

  fs.readdir(path, function (err, items) {
    // Show items read from image directory
    console.log(items);

    for (let i = 0; i < items.length; i++) {
      // Add each image file to list, with pug syntax to build the gallery
      let path = items[i];
      let pugStuff = 'a(href=\'#open'+i+'\',rel=\'noopener\')' + '\n    img(class=\'cell\',src=\'images/' + path + '\')\na(href=\'#close'+i+'\',rel=\'noopener\')\n    #open'+i+'.image\n        img(src=\'images/'+path+'\')\n';

      fs.appendFile('images.pug', pugStuff, function (err) {
        if (err) throw err;
        console.log('Added ' + path);
      });
    }
  });

  // Optimize images and output to public dir
  gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'));

  // Compile, minify, & autoprefix css and output to public dir
  gulp.src('*.sass')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/css/'));

  // Compile all .pug files to html and output to public dir
  gulp.src('index.pug')
    .pipe(pug())
    .pipe(gulp.dest('public'));

});
