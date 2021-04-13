module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      test: {
        files: [
          {expand: true, cwd: './src', src: 'index.html', dest: './dist'},
          {expand: true, cwd: './src/api', src: '*', dest: './dist/api/'},
          {expand: true, cwd: './src/test', src: '*', dest: './dist/test/'},
          {expand: true, cwd: './src/css', src: '*', dest: './dist/css/'},
          {expand: true, cwd: './node_modules/mocha', src: 'mocha.css', dest: './dist/css/test'},
          {expand: true, cwd: './src/js', src: '*', dest: './dist/js/'},
          {expand: true, cwd: './node_modules/mocha', src: 'mocha.js', dest: './dist/js/test'},
          {expand: true, cwd: './node_modules/chai', src: 'chai.js', dest: './dist/js/test'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy:test']);
};