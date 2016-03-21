module.exports = function(grunt) {

require('jit-grunt')(grunt);

  grunt.initConfig({
    uglify: {
      options: {
        mangle:false //will change your variables, function names, etc into shortened versions if true
      },
      my_target: {
        files: {
          '../js/main.min.js': ['../js/main.js'] // destination file and source file
        }
      }
    },
    sass: {
      dev: {
        options: {
          style: 'nested',
          sourcemap: 'none',
          noCache: true   
          //compass: true
        },
        files: {
          '../css/main.min.css': 'scss/main.scss' // destination file and source file
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          noCache: true
          //compass: true
        },
        files: {
          '../css/main.min.css': 'scss/*.scss' // destination file and source file
        }
      }
    },
    watch: {
      options: { livereload:true },
      scripts: {
        files: ['../js/*.js'], // which files to watch
        tasks: ['uglify']
      },
      sass: {
        files: ['scss/**/*.scss'], // which files to watch
        tasks: ['sass:dev']
      },
      html: {
        files: ['../../*.html']
      }
    }

  }); //end initConfig
  
  grunt.registerTask('default', ['watch']);
}; //end exports