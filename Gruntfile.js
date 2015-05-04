'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
        compass: {
            main: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    spriteLoadPath: 'images/sprites',
                    relativeAssets: false,
                    debugInfo: true,
                    noLineComments: true,
                    assetCacheBuster: false
                }
            }
        }
    });

    grunt.registerTask('sprites', ['compass']);
    grunt.registerTask('default', ['sprites']);
};
