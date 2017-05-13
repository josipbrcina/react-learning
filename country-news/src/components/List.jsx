let React = require('react');
let ListItem = require('./ListItem.jsx');

let List = React.createClass({
    render: function () {

        let newsItems = [
            {   userThumbnail: "https://unsplash.it/200/?random",
                articleTitle: "Article Title",
                articleSubTitle: "This is subtitle",
                articleText: "Hi! Here Am i practicing beginner level of React. It's really interesting " +
                "at least for now :)" + "Anyway this is static data passed to components and rendered after that!",
                articleLocation: "Located in beautiful city Osijek, Croatia!"
            },
            {   userThumbnail: "https://unsplash.it/200/?random",
                articleTitle: "Article Title",
                articleSubTitle: "This is subtitle",
                articleText: "Hi! Here Am i practicing beginner level of React. It's really interesting" +
                " at least for now :)" + "Anyway this is static data passed to components and rendered after that!",
                articleLocation: "Located in beautiful city Osijek, Croatia!"
            }
        ];

        let createItem = function (item, index) {
            return <ListItem
                userThumbnail={item.userThumbnail}
                articleTitle={item.articleTitle}
                articleSubTitle={item.articleSubTitle}
                articleText={item.articleText}
                articleLocation={item.articleLocation}
                key={index}
            />
        };
        return (
            <div>{newsItems.map(createItem)}</div>
        );
    }
});

module.exports = List;
