let React = require('react');

let ProductPage = React.createClass({
    getInitialState: function () {
      return {pid: ""};
    },
    componentDidMount: function () {
      this.setState({pId: this.props.params.productId});
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({pId: nextProps.params.productId});
    },
    render: function () {
        return (
            <h1>Hi, I'm product number {this.state.pId}</h1>
        );
    }
});

module.exports = ProductPage;
