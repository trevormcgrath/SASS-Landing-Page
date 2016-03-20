module.exports = function(grunt) {


}; //end exports

/*
  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/LandingPageStyles.min.css": "css/main.less" // destination file and source file
        }
      }
    },
    uglify: {
      options: {
        mangle:false //will change your variables, function names, etc into shortened versions if true
      },
      my_target: {
        files: {
          'js/LandingPageScripts.min.js': ['js/main.js']
        },
      },
    },
    watch: {
      styles: {
        files: ['css/*.less','js/*.js'], // which files to watch
        tasks: ['less','uglify'],
        options: {
          nospawn: true,
          livereload:true
        }
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['less','uglify', 'watch']);
};*/