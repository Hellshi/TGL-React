import React from 'react';
import Header from './components/Layout/header';
import Footer from './components/Layout/footer';
import Main from './components/LoginScreen/main';
import classes from './app.module.css';
import CreateAGame from './components/CreateAGame/createAGameMain';
import RecentGame from './components/RecentGames/recentGameMain';

const App: React.FC = () => (
  <div className={classes.App}>
    <Header />
    {/* <Main /> */}
    <CreateAGame />
    <Footer />
  </div>
);

export default App;
