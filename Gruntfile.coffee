#global module:false

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-exec"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-handlebars-compiler"

  grunt.initConfig

    copy:
      jquery:
        files: [{
          expand: true
          cwd: "bower_components/jquery/dist/"
          src: "jquery.min.js"
          dest: "vendor/js/"
        }]
      bootstrap:
        files: [{
          expand: true
          cwd: "bower_components/foundation-sites/dist/css/"
          src: "foundation-flex.min.css"
          dest: "vendor/css/"
        }]
      foundation:
        files: [{
          expand: true
          cwd: "bower_components/foundation-sites/dist/js/"
          src: "foundation.min.js"
          dest: "vendor/js/"
        }]
      lodash:
        files: [{
          expand: true
          cwd: "bower_components/lodash/dist/"
          src: "lodash.core.min.js"
          dest: "vendor/js/"
        }]
      tabletop:
        files: [{
          expand: true
          cwd: "bower_components/tabletop/src/"
          src: "tabletop.min.js"
          dest: "vendor/js/"
          }]
      jscookie:
        files: [{
          expand: true
          cwd: "bower_components/js-cookie/src/"
          src: "js.cookie.js"
          dest: "vendor/js/"
          }]
      handlebars:
        files: [{
          expand: true
          cwd: "bower_components/handlebars/"
          src: "handlebars.runtime.min.js"
          dest: "vendor/js/"
          }]

    handlebars:
      all:
        files:
          'js/handlebarsTemplates.js': 'hbs-templates/*.hbs'

    exec:
      jekyll:
        cmd: "jekyll build --trace"

    watch:
      options:
        livereload: true
      source:
        files: [
          "_drafts/**/*"
          "_includes/**/*"
          "_layouts/**/*"
          "_posts/**/*"
          "css/**/*"
          "js/**/*"
          "_markers/**/*"
          "_sass/**/*"
          "_config.yml"
          "*.html"
          "*.md"
          "hbs-templates/*.hbs"
        ]
        tasks: [
          "handlebars:all"
          "exec:jekyll"
        ]

    connect:
      server:
        options:
          port: 4000
          base: '_site'
          livereload: true

  grunt.registerTask "build", [
    "copy"
    "handlebars:all"
    "exec:jekyll"
  ]

  grunt.registerTask "serve", [
    "build"
    "connect:server"
    "watch"
  ]

  grunt.registerTask "default", [
    "serve"
  ]
