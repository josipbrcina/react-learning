let React = require('react');

let Footer = React.createClass({
    render: function () {
        let footerStyle = {
            WebkitBoxShadow: "0 0 30px 5px #999",
            minHeight: "100px",
            padding: 50
        };
        let footerTextStyle = {
          textAlign: "center"
        };
        return (
          <div style={footerStyle} className="footer">
              <h4 style={footerTextStyle}> React exercise, Josip Brčina 2017. </h4>
          </div>
        );
    }
});

module.exports = Footer;
