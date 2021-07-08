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
import 'react-toastify/dist/ReactToastify.css';

export interface Game {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

export interface RootState {
  auth: {
    isAuth: boolean;
  };
}
const App = (): JSX.Element => {
  const auth = useSelector((state: RootState) => state.auth.isAuth);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>({
    type: '',
    description: '',
    range: 10,
    price: 20,
    'max-number': 1,
    color: '',
    'min-cart-value': 1,
  });
  useEffect(() => {
    fetch('http://localhost:3333/types')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setSelectedGame(data[0]);
      });
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/create-game">
            {!auth ? <Redirect to="/" /> : <CreateAGame />}
          </Route>
          <Route path="/recent-games">
            {!auth ? <Redirect to="/" /> : <RecentGame allGames={games} />}
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
};
export default App;
