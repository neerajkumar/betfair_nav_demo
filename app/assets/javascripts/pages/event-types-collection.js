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
        var self = this;
        if (this.model == undefined){
            var spec_id = window.location.href.split("/")[window.location.href.split("/").length - 1];
            app.betfair_roots.getOrFetch(spec_id, {all: true}, function(err, model){
                if (err) alert("couldnt find a model with id: " + spec_id);
                self.model = model;
                var childrenNodes = new Collection(self.model.children)
                self.renderCollection(childrenNodes, EventView, self.getByRole('events-list'));
                if (!app.betfair_roots.length) {
                    self.fetchCollection();
                }
            })
        }
        else {
            var childrenNodes = new Collection(this.model.children)
            this.renderCollection(childrenNodes, EventView, this.getByRole('events-list'));
            if (!app.betfair_roots.length) {
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
        app.betfair_roots.getOrFetch(spec.id, {all: true}, function(err, model){
            if (err) alert("couldnt find a model with id: " + spec.id);
            self.model = model
        })
    }
})