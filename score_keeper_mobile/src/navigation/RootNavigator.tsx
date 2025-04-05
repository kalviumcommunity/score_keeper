import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screens/LandingPage/LandingPage';
import Home from '../screens/Home/Home';
import PlayedGamesScreen from '../screens/PlayedGames/PlayedGames';
import { useAuth0 } from 'react-native-auth0';
import SemiResult from '../screens/NewGame/SemiResult';
import PlayNewGame from '../screens/NewGame/NewGame';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return null; // Optionally, you can render a loading spinner here
  }

  return (
    <Stack.Navigator
      initialRouteName={user ? 'Home' : 'LandingPage'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PlayedGames" component={PlayedGamesScreen} />
      <Stack.Screen name="SemiResult" component={SemiResult} />
      <Stack.Screen name="NewGame" component={PlayNewGame} />
    </Stack.Navigator>
  );
}
