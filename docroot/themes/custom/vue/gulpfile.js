var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('js', function() {
  return gulp.src(['node_modules/vue/dist/vue.js',
                   'node_modules/vue-resource/dist/vue-resource.js'])
    .pipe(gulp.dest('js'));
});

gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.vue$/,
            loader: 'vue'
          }
        ]
      },
      babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      },
      resolve: {
        modulesDirectories: ['node_modules']
      },
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(gulp.dest('js/'));
});

gulp.task('default', ['js', 'webpack'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch('node_modules/foundation-sites/dist/*.js', ['js']);
  gulp.watch('node_modules/foundation-sites/vendor/jquery/dist/*.js', ['js']);
  gulp.watch('node_modules/vue/dist/*.js', ['js']);
  gulp.watch('node_modules/vue-router/dist/*.js', ['js']);
  gulp.watch('node_modules/vue-resource/dist/*.js', ['js']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('src/**/*.js', ['webpack']);
  gulp.watch('src/**/*.vue', ['webpack']);
});
