import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import SectionContainer from './container/SectionContainer/SectionContainer.jsx';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={SectionContainer} />
  </Route>
);

export default routes;
