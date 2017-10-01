import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import store from './store';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{ height: '100%' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;