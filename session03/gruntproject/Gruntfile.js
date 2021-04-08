module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: '\n/******************/\n',
      },
        dist: {
        src: ['./src/**/*.js'],
        dest: './dist/js/all.js',
      }
    },

    eslint: {
      options: {
        rules: {
          "semi": ["error", "always"],
          "quotes": ["error", "single"],
          "no-console": "error"
        },
        parserOptions: {
          ecmaVersion: 2016
        }
      },
      src: ['./src/**/*.js']
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    }

  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'eslint', 'sass']);

};