import React, { useEffect, useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthProvider, useAuth } from '@auth';
import { applyBackHandleListener, navigation } from '@utils/navigation';
import { AppSafeAreaWrapper } from './app.styles';
import { AppScreensProvider, useAppScreens } from './AppScreensProvider';
import AppNavigator from '@screens'; 

const App = () => {
  const { initialized, isConfigured } = useAuth();
  const { setNavigationReady } = useAppScreens();
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
        console.log("User authenticated.");
      } else {
        setIsAuthenticated(false);
        console.log("User not authenticated.");
      }
      setSessionLoaded(true);
      RNBootSplash.hide({ fade: true });
    });

    // Cleanup function
    return () => {
      unsubscribe(); // Remove listener on unmount
      const backHandler = applyBackHandleListener();
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    if (initialized && isConfigured) {
      RNBootSplash.hide({ fade: true });
      setNavigationReady(true);
    }
  }, [initialized, isConfigured, setNavigationReady]);

  if (!initialized || !isConfigured || !sessionLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  console.log(sessionLoaded+" 55");
  

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeAreaView style={AppSafeAreaWrapper}>
        <NavigationContainer ref={navigation} onReady={() => setNavigationReady(true)}>
          <AppNavigator navigationReady={true} /> 
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const ProviderWrappedApp = () => (
  <AuthProvider>
    <AppScreensProvider>
      <App />
    </AppScreensProvider>
  </AuthProvider>
);

export default ProviderWrappedApp;
