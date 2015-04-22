
// use CouchDB
exports.db = {
  url: 'mongodb://192.168.99.100/',
  name: 'test',
  collection: 'users'
};


// or if you want to use rest
exports.rest = {

  // set starting page for single page app
  index: 'public/index.html',

  // use view engine (render()) or send static file (sendfile())
  useViewEngine: false

};
