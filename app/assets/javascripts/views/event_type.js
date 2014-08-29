var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.event,
    bindings: {
        'model.name': '[role=eventName]',
        'model.children': '[role=eventName]',
        'model.childrenNames': {
            type: 'attribute',
            role: 'childName',
            name: 'href'
        }
    }
});
