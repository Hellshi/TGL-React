import React from 'react';
import RigthContainer from './rigthContainer';
import LeftContainer from './leftContainer';
import Main from './styles/createAGameMain';

const createAGameMain: React.FC = () => (
  <Main>
    <LeftContainer />
    <RigthContainer />
  </Main>
);

export default createAGameMain;
