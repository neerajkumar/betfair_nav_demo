var PageView = require('./base');
var templates = require('../templates');
//var EventView = require('../views/event_type');

module.exports = PageView.extend({
    pageTitle: 'Events',
    template: templates.pages.personView,
    bindings: {
        'model.childrenNames': '[role=childName]',
        'model.name': '[role=name]'
//        'model.avatar': {
//            type: 'attribute',
//            role: 'avatar',
//            name: 'src'
//        },
//        'model.editUrl': {
//            type: 'attribute',
//            role: 'edit',
//            name: 'href'
//        }
    },
//    render: function(){
//        this.renderWithTemplate();
//        this.renderCollection(this.collection, EventView, this.getByRole('events-list'));
//        if (!this.collection.length) {
//            this.fetchCollection();
//        }
//    },
//
//    fetchCollection: function () {
//        this.collection.fetch();
//        return false;
//    },
    initialize: function (spec) {
        var self = this;
        app.people.getOrFetch(spec.id, function (err, model) {
            if (err) alert('couldnt find a model with id: ' + spec.id);
            self.model = model;
        });
    }
})