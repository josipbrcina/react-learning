let React = require('react');
let Photo = require('./Photo.jsx');

let Photos = React.createClass({
    render: function () {
        let divWrapperStyle = {
            MozBoxShadow: "0 0 30px 5px #999",
            WebkitBoxShadow: "0 0 30px 5px #999",
            padding: 20
        };

        let generatePhotos = function () {
            let photosArray = [];
            for (let x = 0; x < 8; x++) {
                photosArray.push(<Photo key={x}/>);
            }
            return photosArray;
        };

        return (
            <div style={divWrapperStyle} className="container">{generatePhotos()}</div>
        );
    }
});

module.exports = Photos;
