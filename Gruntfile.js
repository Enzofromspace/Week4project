module.exports = function(grunt) {

 // Project configuration.
 // Defines how and what is being done
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
   	 	files: {
   	 		'css/main.css' : 'css/main.scss'
   	 	}
   		
   	}
   },
 watch: {
 	css:{
 		files: ['css/main.scss'],
 		tasks: ['sass', 'autoprefixer']
 		}
 	},
 	options: {
 		livereload: true
 	},
 	autoprefixer: {
 		options: {
 			browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
 		},
 		no_dest: {
 			src: 'css/main.css'
 		}
 	},
 	connect: {
 		server: {
 			options: {
 				port: 9001,
 				base: ''
 			}
 		}
 	}
 });

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-connect');

 // Default task(s).  Make sure names match
 grunt.registerTask('default', ['connect','watch']);
};