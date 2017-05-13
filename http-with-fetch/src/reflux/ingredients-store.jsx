let HTTP = require('../services/httpservice');
let Reflux = require('reflux');
let Actions = require('./actions.jsx');

let IngredientStore = Reflux.createStore({
    listenables: [Actions],
    getIngredients: function () {
        HTTP.get('/ingredients')
            .then(function(jsonData) {
                this.ingredients = jsonData;
                this.triggerUpdate();
            }.bind(this));
    },
    postIngredient: function (text) {
        if (!this.ingredients) {
            this.ingredients = [];
        }

        let ingredient = {
            "text": text,
            "id": Math.floor(Date.now()) + text
        };
        this.ingredients.push(ingredient);
        this.triggerUpdate();

        HTTP.post('/ingredients', ingredient)
            .then(function (response) {
                this.getIngredients();
            }.bind(this));
    },
    // Refresh function
    triggerUpdate: function () {
        this.trigger('change', this.ingredients);
    }
});

module.exports = IngredientStore;
