var PageView = require('./base');
var templates = require('../templates');
var EventView = require('../views/event');
var Collection = require('../models/betfair_factory');

module.exports = PageView.extend({
    pageTitle: 'Events',
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
                self.collection = app.betfair_roots
                if (self.collection.models.length == 0) {
                    self.fetchCollection();
                }
                var data = []
                var extractData = function(json, spec_id) {
                    var i = 0;
                    if (data.length == 0) {
                        while (i < json.length) {
                            if (json.models[i].id == spec_id) {
                                data = json;
                                break;
                            } else if (json.models[i].children == undefined) {
                                break;
                            } else {
                                extractData(new Collection(json.models[i].children), spec_id);
                            }
                            i++;
                        }
                    }
                    if (data.length > 0) {
                        return data;
                    }
                };
                self.collection = extractData(self.collection, spec_id)
                if (self.collection != undefined) {
                    self.collection.getOrFetch(spec_id, {all: true}, function(err, model){
                        if (err) alert("couldn't find a model with id: " + spec_id);
                        self.model = model;
                        var childrenNodes = new Collection(self.model.children);
                        self.renderCollection(childrenNodes, EventView, self.getByRole('events-list'));
                        if (!childrenNodes.length) {
                            new Collection(self.model.children).fetch();;
                        }
                    })
                }
            })
        }
        else {
            var childrenNodes = new Collection(this.model.children)
            this.renderCollection(childrenNodes, EventView, this.getByRole('events-list'));
        }
    },
    fetchCollection: function () {
        setInterval(this.collection.fetch(), 5000)
        return false;
    },
    initialize: function (spec) {
        var self = this;
        var collection = this.collection || app.betfair_roots
        var data = []
        var extractData = function(json, spec) {
            var i = 0;
            if (data.length == 0) {
                while (i < json.length) {
                    if (json.models[i].id == spec.id) {
                        data = json;
                        break;
                    } else if (json.models[i].children == undefined) {
                        break;
                    } else {
                        extractData(new Collection(json.models[i].children), spec);
                    }
                    i++;
                }
            }
            if (data.length > 0) {
                return data;
            }
        };
        this.collection = extractData(collection, spec)
        if (this.collection != undefined) {
            this.collection.getOrFetch(spec.id, function(err, model){
                if (err) alert("couldn't find a model with id: " + spec.id);
                self.model = model
            })
        }
    }
})