module.exports = function (grunt) {
	'use strict';

	require('source-map-support').install();

	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-tslint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-continue');

	grunt.initConfig({
		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json'),
				formatter: 'tslint-path-formatter'
			},
			all: ['**/*.ts']
		},
		clean: {
			all: [
				'ambient_import_relative/**/*.js'
			]
		},
		ts: {
			options: {
				fast: 'never',
				target: 'es5',
				module: 'commonjs',
				sourcemap: false,
				declaration: false,
				comments: true,
				verbose: true
			},
			air: {
				options: {
					noImplicitAny: true
				},
				src: ['ambient_import_relative/**/*.ts'],
				outDir: 'tmp/'
			}
		}
	});
	grunt.registerTask('pass', [
	]);
	grunt.registerTask('fail', [
		'continueOn',
		'ts:air',
		'continueOff'
	]);

	grunt.registerTask('prep', [
		'clean'
	]);

	grunt.registerTask('test', [
		'prep',
		'pass',
		'fail',
		'tslint'
	]);

	grunt.registerTask('default', ['test']);
};
