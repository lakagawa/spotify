import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './../App/App.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path='/:page?/:item?' component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Root;