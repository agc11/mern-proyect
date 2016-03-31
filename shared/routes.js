import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import SectionContainer from './container/SectionContainer/SectionContainer.jsx';
import LoginContainer from './container/LoginContainer/LoginContainer.jsx';

const routes = (
  <Route path="/" component={App} >
    <Route path="login" component={LoginContainer} />
    <IndexRoute component={SectionContainer} />
  </Route>
);

export default routes;
