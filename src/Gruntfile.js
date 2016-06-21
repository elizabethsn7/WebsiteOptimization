module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        copy: {
      generated: {
        src: 'index.html',
        dest: 'dist/index.html'
      }
    },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/perfmatters.min.js': ['js/perfmatters.js'],
                    'dist/views/js/main.min.js': ['views/js/main.js']
                }
            }
        }
    });
    grunt.registerTask('default', [
        //this is calling the grunt configuration 
        'uglify',

    ])
}