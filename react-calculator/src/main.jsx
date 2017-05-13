let React = require('react');
let ReactDOM = require('react-dom');
let LeadCapture = require('./components/LeadCapture.jsx');
let Calculator = require('./components/Calculator.jsx');

ReactDOM.render(<LeadCapture />, document.getElementById("leadCapture"));
ReactDOM.render(<Calculator />, document.getElementById("calculator"));