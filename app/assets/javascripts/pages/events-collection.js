var PageView = require('./base');
var templates = require('../templates');
//var EventView = require('../views/event_type');

module.exports = PageView.extend({
    pageTitle: 'Events',
    template: templates.pages.personView,
    bindings: {
        'model.childrenNames': '[role=childName]',
        'model.name': '[role=name]'
    },
    initialize: function (spec) {
        var self = this;
        app.people.getOrFetch(spec.id, function (err, model) {
            if (err) alert('couldnt find a model with id: ' + spec.id);
            self.model = model;
        });
    }
})