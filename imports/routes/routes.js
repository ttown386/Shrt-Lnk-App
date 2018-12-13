import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router,
         Route, 
         Switch 
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createBrowserHistory();
window.browserHistory = history;
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    history.replace('/links');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    history.replace('/');
  }
}

export const onAuthChange = (isAuthenticated) => {
  const pathname = location.pathname;
  const isUnathenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnathenticatedPage &&  isAuthenticated) {
    history.replace('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
}

export const routes = (
  <Router history = {history}>
    <Switch>
      <Route exact path="/" component={Login} onEnter={onEnterPublicPage}/>
      <Route exact path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route exact path="/links" component={Link} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);