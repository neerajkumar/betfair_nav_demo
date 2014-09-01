var Collection = require('ampersand-rest-collection');
var BetfairRoot = require('./betfair_root');


module.exports = Collection.extend({
    mainIndex: 'id',
    model: BetfairRoot,
    url: '/api/betfair_roots'
});
