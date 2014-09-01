var AmpersandModel = require('ampersand-model');
var Collection = require('./persons')


module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        firstName: ['string', true, ''],
        lastName: ['string', true, ''],
        coolnessFactor: ['number', true, 5],
        name: ['string', true, ''],
        children: ['array', false, ''],
        type: ['string', false, '']
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        fullName: {
            deps: ['firstName', 'lastName'],
            fn: function () {
                return this.firstName + ' ' + this.lastName;
            }
        },
        avatar: {
            deps: ['firstName', 'lastName'],
            fn: function () {
                return 'http://robohash.org/' + encodeURIComponent(this.fullName) + '?size=80x80';
            }
        },
        editUrl: {
            deps: ['id'],
            fn: function () {
                return '/person/' + this.id + '/edit';
            }
        },
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
