let React  = require('react');

let InputField = React.createClass({
    getInitialState: function () {
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
                   placeholder={this.props.placeholder ? this.props.placeholder : ""}
                   onChange={this.onChange}
                   value={this.state.value} />
        );
    }
});

module.exports = InputField;
