module.exports = function(grunt) {
  grunt.initConfig({
    // Copy all the files from src to dist
    copy: {
      dist: {
        cwd: 'src/',
        expand: true,
        src: '**',
        dest: 'dist/'
      }
    },
    inline: {
      dist: {
        options: {
            inlineTagAttributes: {
                js: 'data-inlined="true"',
                css: 'data-inlined="true"'
            },
            cssmin: true,
            uglify: true
        },
        src: 'src/index.html',
        dest: 'dist/index.html'
      }
    },
    // // Concatenation files
    // concat: {
    //   dist: {
    //       src: ['src/css/*.css', 'src/css/!*.min.css'],
    //       dest: 'dist/css/compiled.css'
    //   }
    // },
    // // Minify css files
    // cssmin: {
    //   dist: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: 'dist/css',
    //         src: ['compiled.css'],
    //         dest: 'dist/css',
    //         ext: '.min.css'
    //        }
    //     ]
    //   }
    // },
    // // Make sure index.html file loads the new compiled CSS
    // processhtml: {
    //   dist: {
    //     files: {
    //       'dist/index.html': ['src/index.html']
    //     }
    //   }
    // },
    // Minify html files
    htmlmin: {
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      dist: {
          files: [
              {
                expand: true,     // Enable dynamic expansion.
                cwd: 'dist/',      // Src matches are relative to this path.
                src: ['*.html'], // Actual pattern(s) to match.
                dest: 'dist/',   // Destination path prefix.
               }
          ]
      }
    },
    // Minify js files
    // uglify: {
    //   dist: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: 'src/js',
    //         src: '*.js',
    //         dest: 'dist/js',
    //         ext: '.min.js'
    //       }
    //     ]
    //   }
    // },
    // Minify images
    imagemin: {
      dynamic: {
        options: {                       // Target options
            optimizationLevel: 3,
            progressive: true
        },                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/'                  // Destination path prefix
        }]
      }
    }
  //   responsive_images: {
  //   myTask: {
  //     options: {},
  //     files: {
  //       'dist/views/images/pizzeria.png': 'src/views/images/pizzeria.png'
  //     }
  //   }
  // }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-inline');
  // grunt.loadNpmTasks('grunt-uncss');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // grunt.loadNpmTasks('grunt-processhtml');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-responsive-images');
  // Default tasks.
  // grunt.registerTask('default', ['copy', 'concat', 'cssmin', 'processhtml', 'htmlmin', 'uglify', 'imagemin']);
  grunt.registerTask('default', ['copy', 'inline', 'htmlmin', 'imagemin']);
};
