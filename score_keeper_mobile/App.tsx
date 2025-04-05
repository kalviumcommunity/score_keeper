// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { Auth0Provider } from 'react-native-auth0';
import config from './src/screens/config/auth0config';

export default function App() {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Auth0Provider>
  );
}
