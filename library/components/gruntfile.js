module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    uglify: {
      options: {
        mangle:false //will change your variables, function names, etc into shortened versions if true
      },
      my_target: {
        files: {
          '../js/main.min.js': ['../js/main.js']
        }
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded'
          //banner: '<%= tag.banner %>',
          //compass: true
        },
        files: {
          '../css/main.min.css': 'scss/*.scss' // destination file and source file
        }
      },
      dist: {
        options: {
          style: 'compressed'
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
        files: ['scss/*.scss'], // which files to watch
        tasks: ['sass:dev']
      },
      html: {
        files: ['../../*.html']
      }
    }

  }); //end initConfig
  

  grunt.registerTask('default', ['watch']);
}; //end exports