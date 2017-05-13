let React = require('react');
let ReactRouter = require('react-router');
let RouteHistory = ReactRouter.hashHistory;
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;

let Base = require('./components/Base.jsx');
let Page1 = require('./components/Page1.jsx');
let Page2 = require('./components/Page2.jsx');

let Routes = (
  <Router history={RouteHistory}>
      <Route path="/" component={Base} >
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Route>
  </Router>
);

module.exports = Routes;
