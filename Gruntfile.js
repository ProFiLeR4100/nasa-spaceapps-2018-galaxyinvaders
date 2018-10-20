module.exports = function (grunt) {
    var configServer = {
        port: 80,
        path: "./build/"
    };

    var config = {
        less: {
            compile: {
                files: {
                    'resources/styles/styles.css': 'resources/styles/styles.less'
                }
            }
        },
        clean: {
            all: ['build']
        },
        htmlmin: {
            task: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true
                },
                files: [
                    htmlminFilesFrom('resources/app')
                ]
            }
        },
        uglify: {
            prod:{
                options: {
                    mangle: false,
                    sourceMap: true,
                    compress: false,
                    beautify: true
                },
                files: {
                    'build/bundle.min.js': [
                        'resources/app/**/*.js'
                    ]
                }
            },
            prodlibs:{
                options: {
                    mangle: true,
                    sourceMap: false,
                    compress: true
                },
                files: {
                    'build/bundle-libs.min.js': [
                        'resources/libs/jquery-3.3.1.slim.min.js',
                        'resources/libs/socket.io.js',
                        'resources/libs/angular.js',
                        'resources/libs/angular-ui-router.js',
                        'resources/libs/angular-sanitize.js',
                        'resources/libs/angular-cookies.js',
                        'resources/libs/angular-translate.js',
                        'resources/libs/angular-translate-loader-static-files.js',
                        'resources/libs/angular-translate-storage-cookie.js',
                        'resources/libs/angular-translate-storage-local.js',
                        'resources/libs/ui-bootstrap-tpls-2.5.0.min.js',
                        'resources/libs/polyfill.min.js.js',
                        'resources/libs/chunk-polyfil.js',
                        'resources/libs/format-polyfil.js',
                        'resources/libs/angular-mocks.js',
                        'resources/libs/angular-mocks-async.js'
                    ]
                }
            }
        },
        watch: {
            options: {
                spawn: false
            },
            configs: {
                files: 'resources/*.json',
                tasks: ['copy:staticFiles']
            },
            js: {
                files: 'resources/app/**/*.js',
                tasks: ['uglify:prod']
            },
            html: {
                files: 'resources/**/*.html',
                tasks: ['ngtemplates:prod', 'htmlmin']
            },
            less: {
                files: 'resources/styles/*.less',
                tasks: ['less:compile', 'copy:styles']
            }
        },
        copy: {
            staticFiles: {
                files: [{
                    cwd: 'resources',
                    expand: true,
                    src: ['*.json'],
                    dest: 'build'
                }, {
                    cwd: 'resources/img',
                    expand: true,
                    src: ['*.png', '*.jpg', '*.svg', '*.gif', '*.mp4'],
                    dest: 'build'
                }, {
                    cwd: 'resources/lang',
                    expand: true,
                    src: ['*.json'],
                    dest: 'build'
                }]
            },
            styles: {
                files: [{
                    cwd: 'resources/styles',
                    expand: true,
                    src: ['styles.css'],
                    dest: 'build'
                }]
            }
        },
        browserSync: {
            dev: {
                options: {
                    port: configServer.port,
                    files: ["build/*"],
                    watchTask: true,
                    server: {
                        baseDir: configServer.path,
                        directory: true
                    }
                }
            }
        },
        ngtemplates: {
            prod: {
                cwd: 'resources/app',
                src: '**/*.html',
                dest: 'build/templates.min.js',
                options: {
                    module: 'app.templates',
                    prefix: '/',
                    standalone: true,
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        run: {
            options: {},
            server: {
                cmd: 'node',
                args: [
                    'server.js'
                ]
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-run');


    grunt.registerTask('build', [/*'clean:all', */'uglify:prod', 'uglify:prodlibs', 'ngtemplates:prod', 'htmlmin', 'less:compile', 'copy']);
    grunt.registerTask('rebuild-without-libs', ['uglify:prod', 'ngtemplates:prod', 'htmlmin', 'less:compile', 'copy']);
    grunt.registerTask('continious-dev', ['build', 'browserSync:dev', 'watch']);
    grunt.registerTask('production', ['build', 'run:server']);
    grunt.registerTask('production-server', ['rebuild-without-libs', 'run:server']);

};

function htmlminFilesFrom (path) {
    return {
        expand: true,
        cwd: path,
        src: ['*.html'],  
        dest: 'build'
    };
}