var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        name: ['string', true, ''],
        children: ['array', true, '']
    },
    deriveddd: {
        childrenNames: {
            def: ['name'],
            fn: function (){
                return this.name;
            }
        }
    }
});
