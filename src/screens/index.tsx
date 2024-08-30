import React from 'react';
import { useAuth } from '@auth';
import { ScreenNames } from '@types';

import AuthScreen from './auth';
import MainDrawerNavigator from '../MainDrawerNavigator';

interface AppNavigatorProps {
  navigationReady: boolean;
}

const AppNavigator: React.FC<AppNavigatorProps> = ({ navigationReady }) => {
  const { initialized, authenticated, currentUser } = useAuth();

  if (!initialized || !navigationReady) {
    return null; // Block render until initialized and navigation is ready
  }

  if (!authenticated || !currentUser?.emailVerified) {
    return <AuthScreen />;
  }

  // Return the drawer as the root navigator
  return <MainDrawerNavigator />;
};

export default AppNavigator;
