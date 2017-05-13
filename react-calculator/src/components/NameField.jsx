let React = require('react');

let NameField = React.createClass({
    getInitialState: function() {
        return {value: ""};
    },
    clear: function () {
        this.setState({value: ""});
    },
    onChange: function (e) {
        this.setState({value: e.target.value});
    },
    render: function () {
        return (
            <input className="form-control"
                   placeholder={this.props.type + " name"}
                   onChange={this.onChange}
                   value={this.state.value} />
        );
    }
});

module.exports = NameField;