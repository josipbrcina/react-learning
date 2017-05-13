let React = require('react');

let Photo = React.createClass({
    render: function () {
        let divStyle = {
          marginBottom: 20
        };
        return (
          <div style={divStyle} className="col-md-3">
              <img src="https://unsplash.it/200/?random" />
          </div>
        );
    }
});

module.exports = Photo;
