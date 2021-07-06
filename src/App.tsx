import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/header';
import Footer from './components/Layout/footer';
import Main from './components/LoginScreen/main';
import classes from './app.module.css';
import CreateAGame from './components/CreateAGame/createAGameMain';
import RecentGame from './components/RecentGames/recentGameMain';
import ResetPassword from './components/LoginScreen/resetPassword';
import SingIn from './components/LoginScreen/singInMain';

const App: React.FC = () => (
  <div className={classes.App}>
    <Header />
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/create-game">
          <CreateAGame />
        </Route>
        <Route path="/recent-games">
          <RecentGame />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/sing-in">
          <SingIn />
        </Route>
      </Switch>
    </Router>

    <Footer />
  </div>
);

export default App;
