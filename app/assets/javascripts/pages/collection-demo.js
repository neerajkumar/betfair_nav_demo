var PageView = require('./base');
var templates = require('../templates');
var BetfairRootView = require('../views/betfair_root');


module.exports = PageView.extend({
    pageTitle: 'Event Types',
    template: templates.pages.collectionDemo,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, BetfairRootView, this.getByRole('betfair-roots-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});
