let React = require('react');

let ListItem = React.createClass({
    render: function () {
        let divWrapperStyle = {
            MozBoxShadow: "0 0 30px 5px #999",
            WebkitBoxShadow: "0 0 30px 5px #999",
            marginBottom: "30px"
        };

        let imgThumbnailStyle = {
           marginRight: "20px"
        };
        return (
            <div style={divWrapperStyle} className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={this.props.userThumbnail} />
                    </div>
                    <div className="col-md-5">
                        <div className="page-header">
                            <h1>{this.props.articleTitle}</h1>
                            <h3>{this.props.articleSubTitle}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <p>{this.props.articleText}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-3">
                            <div className="row">
                                <div style={imgThumbnailStyle} className="col-md-3">
                                    <img src="https://unsplash.it/200/?random"/>
                                </div>
                                <div style={imgThumbnailStyle} className="col-md-3">
                                    <img src="https://unsplash.it/200/?random"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>{this.props.articleLocation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListItem;
