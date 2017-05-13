let React = require('react');
let ReactDOM = require('react-dom');
let Routes = require('./Routes.jsx');
let List = require('./components/List.jsx');
//let ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<List />, document.getElementById('main'));
// ReactDOM.render(Routes, document.getElementById('main'));
// ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
// ReactDOM.render(<ListManager title="ToDo" />, document.getElementById('todo'));
// ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217" />, document.getElementById('christmas'));
