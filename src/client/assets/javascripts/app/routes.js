import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import NotFoundView from '../components/NotFound/NotFound.jsx';
import Home from '../components/Home.jsx';
import Team from '../components/Team.jsx';
import Login from '../components/Login.jsx';
import Code from '../components/Code.jsx';


export default (
	<div>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="404" component={NotFoundView} />
    <Route path="team" component={Team} />
    <Route path="/login" component={Login} />
    <Route path="/code" component={Code} />
    <Redirect from="*" to="404" />
  </Route>
  </div>
);
