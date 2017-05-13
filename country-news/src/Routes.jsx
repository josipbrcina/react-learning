let React = require('react');
let ReactRouter = require('react-router');
let History = ReactRouter.hashHistory;
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;

let BasePage = require('./components/BasePage.jsx');
let News = require('./components/News.jsx');
let Photos = require('./components/Photos.jsx');

let Routes = (
    <Router history={History}>
        <Route path="/" component={BasePage}>
            <Route path="/news" component={News}/>
            <Route path="/photos" component={Photos}/>
        </Route>
    </Router>
);

module.exports = Routes;
