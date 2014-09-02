var AmpersandModel = require('ampersand-model');
//var Collection = require('./betfair_factory')


module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        name: ['string', true, ''],
        children: ['array', false, ''],
        type: ['string', false, '']
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/event_types/' + this.id;
            }
        },
        eventType: {
            deps: ['name'],
            fn: function() {
                return this.name
            }
        },
        viewEventUrl: {
            deps: ['id'],
            fn: function () {
                return '/events/' + this.id
            }
        }
    }
});
