let React = require('react');
let Header = require('./Header.jsx');
let Footer = require('./Footer.jsx');

let BasePage = React.createClass({
    render: function () {
        let childrenWrapperStyle = {
            marginTop: "150px",
            minHeight: "500px"
        };
        return (
            <div>
                <Header headerTitle="Country News" subtitle="Top stories in my country" />
                <div style={childrenWrapperStyle}>{this.props.children}</div>
                <Footer />
            </div>
        );
    }
});

module.exports = BasePage;