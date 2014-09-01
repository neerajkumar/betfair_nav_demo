/*global me, app*/
var Router = require('ampersand-router');
var CollectionDemo = require('./pages/collection-demo');
var EventsCollectionView = require('./pages/events-collection')
var EventTypesCollectionView = require('./pages/event-types-collection')


module.exports = Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'event_types/:id': 'EventTypesCollectionView',
        'events/:id': 'EventsCollectionView',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    collectionDemo: function () {
        this.trigger('page', new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    EventTypesCollectionView: function(id) {
        this.trigger('page', new EventTypesCollectionView({
            id: id
        }))
    },

    EventsCollectionView: function(id) {
        this.trigger('page', new EventsCollectionView({
            id: id
        }))
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
