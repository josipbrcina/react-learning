let React = require('react');
let EmailField = require('./EmailField.jsx');
let NameField = require('./NameField.jsx');
let Reflux = require('reflux');
let Actions = require('../reflux/Actions.jsx');
let EmailStore = require('../reflux/EmailStore.jsx');

let LeadCapture = React.createClass({
    mixins: [Reflux.listenTo(EmailStore, 'onChange')],
    getInitialState: function () {
      return {submitted: false};
    },
    onSubmit: function (e) {
        if (!this.refs.fieldEmail.state.valid) {
            alert("You suck at filling out forms. Email is always required in a lead capture form. Dummy!");

        } else {
            let subscriber = {
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value
                };
            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();
            Actions.submitEmail(subscriber)
        }
    },
    onChange: function (msg) {
        this.setState({submitted: true});
    },
    render: function () {
        let successStyle = {
          color: "green",
            visibility: this.state.submitted ? "visible" : "hidden"
        };
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4>Get Free E-book</h4>
                </div>
                <div className="panel-body">
                    <NameField type="First" ref="fieldName"/>
                    <br />
                    <EmailField ref="fieldEmail"/>
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                        </div>
                        <div className="col-sm-2">
                            <h5 style={successStyle}>Success!</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;
