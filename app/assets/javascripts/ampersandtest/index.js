var test = require('tape');
var Event = require('../models/event')
var json = require('./data.json')

test('init with values', function (t) {
    var event = new Event(
        {
            id: "123",
            name: 'henrik',
            children: json
        });
    t.ok(event);
    t.equal(event.name, 'henrik');
    t.equal(event.id, '123');
    t.equal(event.children, json);
    t.end();
});