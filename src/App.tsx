import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Header from './components/Layout/header';
import Footer from './components/Layout/footer';
import Main from './components/LoginScreen/main';
import CreateAGame from './components/CreateAGame/createAGameMain';
import RecentGame from './components/RecentGames/recentGameMain';
import ResetPassword from './components/LoginScreen/resetPassword';
import SingIn from './components/LoginScreen/singInMain';
import GlobalStyle from './GlobalStyle';
import Reset from './components/LoginScreen/reset';
import 'react-toastify/dist/ReactToastify.css';
import api from './services/api';
import { Game } from './components/CreateAGame/leftContainer';

export interface RootState {
  auth: {
    isAuth: boolean;
  };
}
const App = (): JSX.Element => {
  const auth = useSelector((state: RootState) => state.auth.isAuth);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>({
    id: null,
    game_type: '',
    description: '',
    range: 10,
    price: 20,
    max_number: 1,
    color: '',
    min_cart_value: 1,
  });
  useEffect(() => {
    api(`/all-games`).then(({ data }) => {
      setGames(data);
      setSelectedGame(data[0]);
    });
  }, []);
  return (
    <>
      <Router>
        {auth ? <Header /> : <header style={{ marginBottom: 'auto' }} />}
        <Switch>
          <Route path="/" exact>
            {auth ? <Redirect to="/recent-games" /> : <Main />}
          </Route>
          <Route path="/create-game">
            {!auth ? <Redirect to="/" /> : <CreateAGame />}
          </Route>
          <Route path="/recent-games">
            {!auth ? <Redirect to="/" /> : <RecentGame allGames={games} />}
          </Route>
          <Route path="/reset-password">
            {auth ? <Redirect to="/" /> : <ResetPassword />}
          </Route>
          <Route path="/sing-in">
            {auth ? <Redirect to="/" /> : <SingIn />}
          </Route>
          <Route path="/reset/:token">
            {auth ? <Redirect to="/" /> : <Reset />}
          </Route>
        </Switch>
        <Footer />
      </Router>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};
export default App;
