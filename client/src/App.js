import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import PdfPage from './components/pages/PdfPage';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import { logout } from './helpers/auth';
import { firebaseAuth } from './firebase';
import store from './store';
import './App.scss';
import { fetchServerConfig } from './config';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
  <Route 
    { ...rest }
    render={props => authed === true
      ? <Component { ...props } authed />
      : <Redirect to={{
          pathname: '/login',
          state: {
            from: props.location
          }
        }} />
    }
  />
)
}

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    { ...rest }
    render={props => authed === false
      ? <Component { ...props } authed />
      : <Redirect to='/register/contact' />
    }
  />
)

const HomeRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    { ...rest }
    render={props => authed === false
      ? <Component { ...props } />
      : <Redirect to='/register/contact' />
    }
  />
)

const PdfRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    { ...rest }
    render={props => <Component { ...props } />
    }
  />
)

class App extends Component {

  state = {
    authed: false,
    loading: true,
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        localStorage.setItem('email', email);
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        localStorage.removeItem('email');
        this.setState({
          authed: false,
          loading: false,
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListner();
  }

  render() {
    console.log(this.state.authed)
    return this.state.loading === true ? <h1>Loading</h1> : (
      // return (
      <Provider store={store}>
        <Router>
          <div style={{ height: '100%' }}>
            {/*<Header authed={this.state.authed} />*/}
            <Switch>
              <HomeRoute exact path="/" authed={this.state.authed} component={HomePage} />
              <PublicRoute authed={this.state.authed} path="/login" component={LoginPage} />
              <PublicRoute authed={this.state.authed} path="/signup" component={SignUpPage} />
              <PrivateRoute authed={this.state.authed} path="/register" component={RegisterPage} />
              <PdfRoute exact path="/pdf/:email" component={PdfPage} />
              <Route render={() => <h3>404 Not Found</h3> } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;