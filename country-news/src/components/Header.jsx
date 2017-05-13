let React = require('react');
let ReactRouter = require('react-router');
let Link = ReactRouter.Link;

let Header = React.createClass({
    render: function () {
        let headerStyle = {
            backgroundColor: "#3E50B5",
            color: '#ffffff',
            MozBoxShadow: "0 0 30px 5px #999",
            WebkitBoxShadow: "0 0 30px 5px #999"
        };

        let ulStyle = {
            display: "block"
        };

        let liStyle = {
            display: "inline",
            width: "100px",
            marginRight: "20px"
        };

        let mainNavlinksStyle = {
          marginTop: "60px",
            color: "#ffffff"
        };

        return (
            <div style={headerStyle} className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="nav navbar-nav navbar-left">
                        <h1>{this.props.headerTitle}</h1>
                        <h3>{this.props.subtitle}</h3>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <div>
                            <ul style={ulStyle}>
                                <li style={liStyle}>Twitter</li>
                                <li style={liStyle}>Facebook</li>
                                <li style={liStyle}>Instagram</li>
                                <li style={liStyle}>Linked In</li>
                                <li style={liStyle}>Email</li>
                            </ul>
                        </div>
                        <div style={mainNavlinksStyle}>
                            <ul style={ulStyle}>
                                <li style={liStyle}><Link style={mainNavlinksStyle} to="/news">NEWS</Link></li>
                                <li style={liStyle}><Link style={mainNavlinksStyle} to="/photos">PHOTOS</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
