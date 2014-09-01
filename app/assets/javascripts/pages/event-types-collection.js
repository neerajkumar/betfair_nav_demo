var PageView = require('./base');
var templates = require('../templates');
var EventView = require('../views/event');
var Collection = require('../models/betfair_factory');

module.exports = PageView.extend({
    pageTitle: 'Event Types',
    template: templates.pages.event,
    bindings: {
        'model.name': '[role=name]',
        'model.viewEventUrl': {
            type: 'attribute',
            role: 'name',
            name: 'href'
        }
    },
    render: function () {
        this.renderWithTemplate();
        if (this.model != undefined){
            var childrenNodes = new Collection(this.model.children)
            this.renderCollection(childrenNodes, EventView, this.getByRole('events-list'));
            if (!childrenNodes.length) {
                this.fetchCollection();
            }
        }
    },
    fetchCollection: function () {
        (new Collection(this.model.children)).fetch();
        return false;
    },
    initialize: function (spec) {
        var self = this;
        var collection = (this.collection.models.length > 0) ? this.collection : new Collection(app.betfair_roots.fetch())
        collection.getOrFetch(spec.id, function(err, model){
            if (err) alert("couldnt find a model with id: " + spec.id);
            self.model = model
        })
    }
})