import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import css from './styles/style.styl';
import { Main } from './components/Main';
import { Single } from './components/Single';
import { PhotoGrid } from './components/PhotoGrid';
import { history, store } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" components={Main}>
        <IndexRoute components={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" components={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
