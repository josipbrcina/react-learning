let React = require('react');
let NavBar = require('./nav/NavBar.jsx');
let LeadCapture = require('./forms/LeadCapture.jsx');

let NavLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "iOs Course",
        href: "/product/55"
    },
    {
        title: "React Learning",
        href: "/product/67"
    }

];

let BasePage = React.createClass({
    render: function () {
        let style = {
            paddingTop: 20
        };
        return (
           <div>
               <NavBar bgColor="#FFF" titleColor="#3097d1" navData={NavLinks} />
               <div style={style} className="container">
                   <div className="row">
                       <div className="col-sm-9">
                           {this.props.children}
                       </div>
                       <div className="col-sm-3">
                           <LeadCapture />
                       </div>
                   </div>

               </div>
           </div>
       );
   }
});

module.exports = BasePage;
