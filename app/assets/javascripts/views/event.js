var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.event,
    bindings: {
        'model.name': '[role=name]'
    }
});
