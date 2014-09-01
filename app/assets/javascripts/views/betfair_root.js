var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.betfair_root,
    bindings: {
        'model.viewUrl': {
            type: 'attribute',
            role: 'eventTypeName',
            name: 'href'
        },
        'model.eventType': '[role=eventTypeName]'
    }
});
