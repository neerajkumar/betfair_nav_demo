/*global me, app*/
var Router = require('ampersand-router');
//var HomePage = require('./pages/home');
var CollectionDemo = require('./pages/collection-demo');
//var InfoPage = require('./pages/info');
//var PersonAddPage = require('./pages/person-add');
//var PersonEditPage = require('./pages/person-edit');
//var PersonViewPage = require('./pages/person-view');
var EventsCollectionView = require('./pages/events-collection')


module.exports = Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'event_types/:eventName': 'EventsCollectionView',
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

    EventsCollectionView: function(id) {
        this.trigger('page', new EventsCollectionView({
            model: me,
            id: id,
            collection: app.people
        }))
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
