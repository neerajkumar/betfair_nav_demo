var Collection = require('ampersand-rest-collection');
var Person = require('./person');


module.exports = Collection.extend({
    mainIndex: 'id',
    model: Person,
    url: '/api/betfair_roots'
});
