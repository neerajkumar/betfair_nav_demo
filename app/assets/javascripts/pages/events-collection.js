var PageView = require('./base');
var templates = require('../templates');
var EventView = require('../views/event');
var Collection = require('ampersand-rest-collection');
var PersonView = require('../views/person');

module.exports = PageView.extend({
    pageTitle: 'Events',
    template: templates.pages.event,
    bindings: {
        'model.childrenNames': '[role=childName]',
        'model.name': '[role=name]'
    },
    render: function () {
        this.renderWithTemplate();
//        this.renderCollection(new Collection(this.model.children), EventView, this.getByRole('events-list'));
//        if (!this.collection.length) {
//            this.fetchCollection();
//        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    },
    initialize: function (spec) {
        var self = this;
        app.people.getOrFetch(spec.id, function (err, model) {
            if (err) alert('couldnt find a model with id: ' + spec.id);
            self.model = model;
        });
    }
})