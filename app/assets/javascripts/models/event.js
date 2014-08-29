var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        name: ['string', true, ''],
        children: ['array', false, '']
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        viewEventUrl: {
            deps: ['id'],
            fn: function () {
                return '/events/' + this.id;
            }
        },
        childName: {
            def: ['children'],
            cache: false,
            fn: function (){
                debugger
                return this.children;
            }
        }
    }
});
