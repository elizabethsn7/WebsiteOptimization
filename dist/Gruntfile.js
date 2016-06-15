module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
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