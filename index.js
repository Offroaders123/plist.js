/**
 * @typedef {string | number | boolean | Date | Buffer | PlistObject | PlistArray} PlistValue
*/

/**
 * @typedef {{ readonly [x: string]: PlistValue; }} PlistObject
*/

/**
 * @typedef {ReadonlyArray<PlistValue>} PlistArray
*/

/**
 * Parser functions.
 */

var parserFunctions = require('./lib/parse');
// Object.keys(parserFunctions).forEach(function (k) { exports[k] = parserFunctions[k]; });

exports.parse = parserFunctions.parse;

/**
 * Builder functions.
 */

var builderFunctions = require('./lib/build');
// Object.keys(builderFunctions).forEach(function (k) { exports[k] = builderFunctions[k]; });

exports.build = builderFunctions.build;
