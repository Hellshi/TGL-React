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
import Games from './components/Admin/Games/Games';
import Users from './components/Admin/Users/Users';
import SingIn from './components/LoginScreen/singInMain';
import GlobalStyle from './GlobalStyle';
import Reset from './components/LoginScreen/reset';
import Account from './components/account/account';
import 'react-toastify/dist/ReactToastify.css';
import api from './services/api';
import { Game } from './components/CreateAGame/leftContainer';

export interface RootState {
  auth: {
    isAuth: boolean;
    user: {
      name: string;
      email: string;
      is_admin: boolean;
      picture: {
        created_at: string;
        file: string;
        id: number;
        name: string;
        subtype: string;
        type: string;
        updated_at: string;
        url: string;
        user_id: number;
      };
      password: string;
    };
  };
}
const App = (): JSX.Element => {
  const auth = useSelector((state: RootState) => state.auth.isAuth);
  const isAdmin = useSelector((state: RootState) => state.auth.user.is_admin);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>({
    id: 0,
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
          <Route path="/profile">
            {!auth ? <Redirect to="/" /> : <Account />}
          </Route>
          <Route path="/users">
            {!auth && !isAdmin ? <Redirect to="/" /> : <Users />}
          </Route>
          <Route path="/games">
            {!auth && !isAdmin ? <Redirect to="/" /> : <Games />}
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
