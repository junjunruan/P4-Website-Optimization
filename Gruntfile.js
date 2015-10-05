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
	// Inline CSS and JS
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
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Default tasks.
  grunt.registerTask('default', ['copy', 'inline', 'htmlmin', 'imagemin']);
};
