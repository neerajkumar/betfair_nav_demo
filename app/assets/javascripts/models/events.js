var Collection = require('./betfair_factory');
var Event = require('./event');

module.exports = Collection.extend({
    mainIndex: 'id',
    model: Event,
    url: '/api/betfair_roots'
});
