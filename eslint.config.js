'use strict';

const { defineConfig } = require( 'eslint/config' );
const wikimedia = require( 'eslint-config-wikimedia/flat' );

module.exports = defineConfig( [
	// These run in Node and have their own config below
	{
		ignores: [ 'Gruntfile.js', 'eslint.config.js' ],
		extends: [ wikimedia( 'client/common', 'jquery', 'mediawiki' ) ],
		languageOptions: {
			globals: {
				mediaWiki: 'readonly'
			}
		},
		rules: {
			'no-jquery/no-global-selector': 'warn'
		}
	},
	{
		// MediaWiki 1.40 still serves JavaScript to ES5 browsers
		files: [ 'modules/**/*.js' ],
		languageOptions: {
			ecmaVersion: 5
		}
	},
	{
		files: [ 'Gruntfile.js', 'eslint.config.js' ],
		extends: [ wikimedia( 'server' ) ]
	}
] );
