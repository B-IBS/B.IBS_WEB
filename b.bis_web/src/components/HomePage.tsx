import React from 'react';
import useDefaultStore from '../context/storeApi';
import Test from './DoctorDashboard';
import SignInSide from './tokenLogin';

const HomePage: React.FC = () => {
  const { logged } = useDefaultStore();

  return (
    <div>
      {logged ? <Test /> : <SignInSide /> }
    </div>
  );
};

export default HomePage;
