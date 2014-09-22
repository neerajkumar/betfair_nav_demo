/*global me, app*/
var Router = require('ampersand-router');
var CollectionDemo = require('./pages/collection-demo');
var EventsCollectionView = require('./pages/events-collection')
var EventTypesCollectionView = require('./pages/event-types-collection')


module.exports = Router.extend({
    routes: {
        'ampersand_clients': 'home',
        'ampersand_clients/collections': 'collectionDemo',
        'ampersand_clients/event_types/:id': 'EventTypesCollectionView',
        'ampersand_clients/events/:id': 'EventsCollectionView',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new CollectionDemo({
            model: me,
            collection: app.betfair_roots
        }));
    },

    collectionDemo: function () {
        this.trigger('page', new CollectionDemo({
            model: me,
            collection: app.betfair_roots
        }));
    },

    EventTypesCollectionView: function(id) {
        this.trigger('page', new EventTypesCollectionView({
            id: id,
            collection: app.betfair_roots
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
