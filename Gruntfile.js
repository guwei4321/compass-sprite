'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
        compass: {
            main: {
                options: {
                    http_path: "/",
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    spriteLoadPath: 'images/sprites',
                    relativeAssets: true,
                    debugInfo: false,
                    noLineComments: false,
                    assetCacheBuster: false
                }
            }
        }
    });

    grunt.registerTask('sprites', ['compass']);
    grunt.registerTask('default', ['sprites']);
};
