let React = require('react');
let ListItem = require('./ListItem.jsx');
let HTTP = require('../services/httpservice');

let List = React.createClass({
    getInitialState: function () {
      return {ingredients: []};
    },
    componentWillMount: function () {
        HTTP.get('/ingredients')
            .then(function (data) {
               this.setState({ingredients: data});
            }.bind(this)); // Bind this function to this react component
    },
    render: function () {

        let ListItems = this.state.ingredients.map(function (item) {
            return <ListItem key={item.id} text={item.text} />
        });

        let createItem = function (text, index) {
            return <ListItem key={index + text} text={text} />
        };

        return (
            <ul>{ListItems}</ul>
            //<ul>{this.props.items.map(createItem)}</ul>
        );
    }
});

module.exports = List;
