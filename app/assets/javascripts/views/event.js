var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.event,
    bindings: {
        'model.viewEventUrl': {
            type: 'attribute',
            role: 'eventName',
            name: 'href'
        },
        'model.children': '[role=eventName]',
        'model.childName': {
            type: 'attribute',
            role: 'eventName',
            name: 'href'
        }
    }
});
