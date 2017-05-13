let React = require('react');
let List = require('./List.jsx');

let ListManager = React.createClass({
    // Called once in the Component life cycle - an initialization
    getInitialState: function () {
        return {items: [], newItemText: ''};
    },
    onChange: function (e) {
        // Update the state property every time a keystroke inputs
      this.setState({newItemText: e.target.value});
    },
    handleSubmit: function (e) {
        // Stop the button from getting clicks since we are using form
      e.preventDefault();

      // Grab the current list of items
      let currentItems = this.state.items;

      // Add new item to the list of items
      currentItems.push(this.state.newItemText);

      // Update the main items list with the new list and clear text value
      this.setState({items: currentItems, newItemText:''});
    },
    render: function () {

        let divStyle = {
            marginTop: 10
        };

        let headingStyle = {

        };

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return(
            // onChange is called on every keystroke so we can update so we can store more recent data enterd
            // value is what the user sees in the input box - we point this to newItemText
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
