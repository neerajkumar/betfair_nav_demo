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
        if (this.model != undefined){
            var childrenNodes = new Collection(this.model.children)
            this.renderCollection(childrenNodes, EventView, this.getByRole('events-list'));
        }
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