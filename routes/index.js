var plivo = require('plivo'),
	Hapi;


module.exports = function(hapi) {
  Hapi = hapi
  return exports;
};

var voteSMS = exports.voteSMS = function(request, reply) {
  var resp = new plivo.Response();
  resp.addMessage('Thanks for voting!');
  reply(resp.toXML()).type('text/xml');
};