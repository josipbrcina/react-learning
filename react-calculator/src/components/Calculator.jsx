let React = require('react');
let InputField = require('./InputField.jsx');

let Calculator = React.createClass({
    onClick: function (val) {
      switch (val) {
          case 'add':
              let added = parseFloat(this.refs.firstNumber.state.value) + parseFloat(this.refs.secondNumber.state.value);
              this.refs.resultField.setState({value: added});
              break;
          case 'subtract':
              let subtracted = parseFloat(this.refs.firstNumber.state.value) - parseFloat(this.refs.secondNumber.state.value);
              this.refs.resultField.setState({value: subtracted});
              break;
          case 'divide':
              let divided = parseFloat(this.refs.firstNumber.state.value) / parseFloat(this.refs.secondNumber.state.value);
              this.refs.resultField.setState({value: divided});
              break;
          case 'multiply':
              let multiplied = parseFloat(this.refs.firstNumber.state.value) * parseFloat(this.refs.secondNumber.state.value);
              this.refs.resultField.setState({value: multiplied});
              break;
          case 'clear':
              this.refs.firstNumber.clear();
              this.refs.secondNumber.clear();
              this.refs.resultField.clear();
              break;
      }
    },
    render: function () {
        let rowStyle = {
            marginBottom: "20px"
        };
        let containerStyle = {
            MozBoxShadow: "0 0 30px 5px #999",
            WebkitBoxShadow: "0 0 30px 5px #999"
        };

        let h1Style = {
            textAlign: "center"
        };
        return (
            <div style={containerStyle} className="container">
                <div style={rowStyle} className="row">
                    <div className="col-md-12">
                        <h1 style={h1Style}>Simple React Calculator</h1>
                    </div>
                </div>
                <div style={rowStyle} className="row">
                    <div className="col-md-6">
                        <InputField placeholder="NUMBER e.g. 1843" ref="firstNumber"/>
                    </div>
                    <div className="col-md-6">
                        <InputField placeholder="NUMBER e.g. 500" ref="secondNumber"/>
                    </div>
                </div>
                <div style={rowStyle} className="row">
                    <div className="col-md-3">
                        <button onClick={this.onClick.bind(this, 'add')} className="btn btn-primary"> + Add</button>
                    </div>
                    <div className="col-md-3">
                        <button onClick={this.onClick.bind(this, 'subtract')} className="btn btn-primary"> - Subtract</button>
                    </div>
                    <div className="col-md-3">
                        <button onClick={this.onClick.bind(this, 'divide')} className="btn btn-primary"> / Divide</button>
                    </div>
                    <div className="col-md-3">
                        <button onClick={this.onClick.bind(this, 'multiply')} className="btn btn-primary"> * Multiply</button>
                    </div>
                </div>
                <div style={rowStyle} className="row">
                    <div className="col-md-10">
                        <InputField placeholder="Result" ref="resultField"/>
                    </div>
                    <div className="col-md-2">
                        <button onClick={this.onClick.bind(this, 'clear')} className="btn btn-danger">Clear</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Calculator;
