var
fs = require('fs'),
jsxgettext = require('../lib/jsxgettext'),
utils = require('./utils'),
path = require('path');

exports['test ngettext plural form'] = function (assert, cb) {
  // check that files with leading hash parse
  var inputFilename = path.join(__dirname, 'inputs', 'plural_form.js');
  var outputFilename = path.join(__dirname, 'outputs', 'plural_form.pot');
  fs.readFile(inputFilename, "utf8", function (err, source) {
    var opts = {},
        sources = {'inputs/plural_form.js': source},
        result = jsxgettext.generate(sources, 'inputs/plural_form.js', opts);
    assert.equal(typeof result, 'string', 'result is a string');
    assert.ok(result.length > 0, 'result is not empty');
    utils.compareResultWithFile(result, outputFilename, assert, cb);
  });
};


if (module == require.main) require('test').run(exports);
