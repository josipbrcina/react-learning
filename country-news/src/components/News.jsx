let React = require('react');
let List = require('./List.jsx');

let News = React.createClass({
    render: function () {
        return (
            <List />
        );
    }
});

module.exports = News;