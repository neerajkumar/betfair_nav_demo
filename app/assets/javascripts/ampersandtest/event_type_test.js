var test = require('tape');
var EventType = require('../models/event_type')
var json = require('./data.json')

test('init with values', function (t) {
    var event_type = new EventType(
        {
            id: "123",
            name: 'Neeraj',
            children: json
        });
    t.ok(event_type);
    t.equal(event_type.name, 'Neeraj');
    t.equal(event_type.id, '123');
    t.equal(event_type.children, json);
    t.end();
});

test('init with invalid values', function (t) {
    var event_type = new EventType(
        {
            id: "123",
            children: json
        });
    t.notOk(event_type);
    t.end();
});

test('after init test with derived methods', function (t) {
    var event_type = new EventType(
        {
            id: "123",
            name: 'Neeraj',
            children: json
        });
    t.ok(event_type);
    t.equal(event_type.childrenNames, 'Neeraj');
    t.end();
});
