import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
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

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
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

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    { ...rest }
    render={props => authed === false
      ? <Component { ...props } authed />
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
          axios.get(`http://${fetchServerConfig.ip}:4000/api/user/${email}`)
            .then(res => {
              localStorage.setItem('userId', res.data._id);
            })
            .then(() => {
              this.setState({
                authed: true,
                loading: false,
              })
            })
            .catch(err => console.log(err))
        } else {
          localStorage.removeItem('userId');
          this.setState({
            authed: false,
            loading: false,
          })
        }
      })
  }

  channelIo = () => {
    function a () {
      if (window.CHPlugin) {
        return window.console && console.error && console.error('Channel Plugin script included twice.');
      }
      var ch = { q: [] };
      ['initialize', 'checkIn', 'checkOut', 'show', 'hide', 'track', 'timeTrack'].forEach(function (e) {
        ch[e] = function () {
          var n = Array.prototype.slice.call(arguments);
          n.unshift(e);
          ch.q.push(n);
        }
      });
      window.CHPlugin = ch;
      var node = document.createElement('div');
      node.id = 'ch-plugin';
      document.body.appendChild(node);
      var async_load = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      };
      if (window.attachEvent) {
        window.attachEvent('onload', async_load);
      } else {
        window.addEventListener('load', async_load, false);
      }
    }
    a();
    window.CHPlugin.initialize({
      plugin_id: '202ca41e-9a61-44f6-9a0e-deedc6422833',
      hide_default_launcher: false
    });
  }


  componentWillUnmount() {
    this.removeListner();
  }

  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <Provider store={store}>
        <Router>
          <div style={{ height: '100%' }}>
            {/*<Header authed={this.state.authed} />*/}
            <Switch>
              <Route exact path="/" authed={this.state.authed} component={HomePage} />
              <PublicRoute authed={this.state.authed} path="/login" component={LoginPage} />
              <PublicRoute authed={this.state.authed} path="/signup" component={SignUpPage} />
              <PdfRoute exact path="/pdf/:userId" component={PdfPage} />
              <PrivateRoute authed={this.state.authed} path="/register" component={RegisterPage} />
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