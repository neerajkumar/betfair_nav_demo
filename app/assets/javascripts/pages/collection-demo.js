var PageView = require('./base');
var templates = require('../templates');
var PersonView = require('../views/betfair_root');


module.exports = PageView.extend({
    pageTitle: 'Event Types',
    template: templates.pages.collectionDemo,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, PersonView, this.getByRole('people-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});
