import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Layout/header';
import Footer from './components/Layout/footer';
import Main from './components/LoginScreen/main';
import CreateAGame from './components/CreateAGame/createAGameMain';
import RecentGame from './components/RecentGames/recentGameMain';
import ResetPassword from './components/LoginScreen/resetPassword';
import SingIn from './components/LoginScreen/singInMain';
import GlobalStyle from './GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <>
    <Router>
      <Header />
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
      <Footer />
    </Router>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
