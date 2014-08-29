var PageView = require('./base');
var templates = require('../templates');
var EventView = require('../views/event');

module.exports = PageView.extend({
    pageTitle: 'Events',
    template: templates.pages.eventTypeView,
    render: function(){
        this.renderWithTemplate();
        this.renderCollection(this.collection, EventView, this.getByRole('events-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },

    fetchCollection: function () {
        this.collection.fetch();
        return false;
    },
    initialize: function (spec) {
        var self = this;
        this.collection.getOrFetch(spec.id, function (err, model) {
            if (err) alert('couldnt find a model with id: ' + spec.id);
            self.model = model;
        });
    }
})