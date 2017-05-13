let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;

let  CreateHistory = require('history/lib/createHashHistory');

let History = new CreateHistory ({
   queryKey: false
});

let BasePage = require('./components/BasePage.jsx');
let HomePage = require('./components/HomePage.jsx');
let ProductPage = require('./components/ProductPage.jsx');

let Routes = (
    <Router history={History}>
        <Route path="/" component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
        </Route>
    </Router>
);

module.exports = Routes;
