import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import css from './styles/style.styl';
import { Main } from './components/Main';
import { Single } from './components/Single';
import { PhotoGrid } from './components/PhotoGrid';

const router = (
  <Router history={browserHistory}>
    <Route path="/" components={Main}>
      <IndexRoute components={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" components={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
