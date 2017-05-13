let React = require('react');
let ListItem = require('./ListItem.jsx');
let Reflux = require('reflux');
let Actions = require('../reflux/actions.jsx');
let IngredientStore = require('../reflux/ingredients-store.jsx');

let List = React.createClass({
    mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function () {
        return {ingredients: [], newText: ""};
    },
    componentWillMount: function () {
        Actions.getIngredients();
    },
    onChange: function (event, ingredients) {
        this.setState({ingredients: ingredients});
    },
    onInputChange: function (e) {
      this.setState({newText: e.target.value});
    },
    onClick: function () {
      if (this.state.newText) {
          Actions.postIngredient(this.state.newText);
      }
      this.setState({newText: ""});
    },
    render: function () {
        let listItems = this.state.ingredients.map(function (item) {
            return <ListItem key={item.id} ingredient={item.text}/>;
        });

        return (<div>
                <input placeholder="Add item"
                       value={this.state.newText}
                       onChange={this.onInputChange} />
                <button onClick={this.onClick}>Add item</button>
                <ul>{listItems}</ul>
            </div>
        );
    }
});

module.exports = List;
