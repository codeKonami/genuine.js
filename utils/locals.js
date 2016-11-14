var config = require('../local-config');
var pkg = require ('../package.json');
var locals = {};
locals.lang = config.locales[0];
locals.url = function(path){
  if(locals.lang != config.locales[0]){
    return '/'+locals.lang + path;
  }
  return path;
};
locals.config = config.public || {};
locals.version = pkg.version || '0.0.1';
locals.s3 = (config.s3.active)?config.s3.url:'';
// Example
/*
locals.foo = function(){
  return 'bar';
}
*/

module.exports = locals;
