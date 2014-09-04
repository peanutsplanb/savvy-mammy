/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },

    nodeunit: {
      files: ['test/**/*_test.js']
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      }
    },

    compass: {
      clean: {
        options: {
          clean: true
        }
      },
      build: {
        options: {
          cssDir: 'styles/',
          sassDir: 'styles/',
          //imagesDir:  "../source/img/",
          force: true,
          outputStyle: 'expanded',
          noLineComments: false,
          //config: 'config_build.rb' for sprites
        }
      }/*,      
      release: {
        options: {
          cssDir: '../styles/',
          sassDir: '../styles/',
          imagesDir:  "../source/img/",
          force: true,
          outputStyle: 'compressed',
          noLineComments: true,
          config: 'config_release.rb'
        }
      }*/
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'styles/sitenew.css': 'styles/SiteSass.scss'       // 'destination': 'source'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default');

};
