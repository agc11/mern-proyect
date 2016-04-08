import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import SectionContainer from './container/SectionContainer/SectionContainer.jsx';
import RegisterContainer from './container/RegisterContainer/RegisterContainer.jsx';
import LoginContainer from './container/LoginContainer/LoginContainer.jsx';

const routes = (
  <Route path="/" component={App} >
    <Route path="login" component={LoginContainer} />
    <Route path="register" component={RegisterContainer} />
    <Route path="main" component={SectionContainer} />
    <IndexRoute component={LoginContainer} />
  </Route>
);

export default routes;
