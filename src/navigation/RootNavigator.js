// navigation/RootNavigator.js

import React from 'react';
import { useSelector } from 'react-redux';
// import AuthStack from "./AuthStack";
import AuthStack from './ AuthStack';
import MainStack from './MainStack';

const RootNavigator = () => {
  const user = useSelector(state => state.auth.user);
  console.log('user-->>>>', user);

  return user ? <MainStack /> : <AuthStack />;
};

export default RootNavigator;
