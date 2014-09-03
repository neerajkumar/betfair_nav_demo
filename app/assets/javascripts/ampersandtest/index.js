var test = require('tape');
var Event = require('../models/event')

test('init with values', function (t) {
    var event = new Event({name: 'henrik'});
    t.ok(event);
    t.equal(event.name, 'henrik');
    t.end();
});