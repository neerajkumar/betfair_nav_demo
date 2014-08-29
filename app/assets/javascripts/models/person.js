var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        firstName: ['string', true, ''],
        lastName: ['string', true, ''],
        coolnessFactor: ['number', true, 5],
        name: ['string', true, ''],
        children: ['array', false, '']
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
        childrenNames:{
            deps: ['children'],
            fn: function () {
                var events = []
                for(var i = 0; i < this.children.length; i++){
                    events.push(this.children[i].name)
                }
                return events.join(", ")
            }
        }
    }
});
