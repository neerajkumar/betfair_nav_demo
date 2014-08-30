var Collection = require('./persons');
var Event = require('./event');

module.exports = Collection.extend({
    model: Event,
    url: '/api/betfair_roots'
});
