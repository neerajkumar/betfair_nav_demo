var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        name: ['string', true, ''],
        children: ['array', false, '']
    },
    derived: {
        childrenNames: {
            def: ['name'],
            fn: function (){
                return this.name;
            }
        }
    }
});
