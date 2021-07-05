import React from 'react';
import RecentGameComponentStyled from './styles/recentGameComponentStyled';

const recentGameComponent: React.FC = () => (
  <RecentGameComponentStyled>
    <div className="content">
      <p className="numbers">1,2,3,4,5,8,10,11,25</p>
      <span>30/07/2025 - (R$ 2,50)</span>
      <span>Lotofácil</span>
    </div>
  </RecentGameComponentStyled>
);

export default recentGameComponent;
