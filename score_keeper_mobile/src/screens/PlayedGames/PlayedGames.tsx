import { NavigationProp, CommonActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  BackHandler,
} from 'react-native';
import { useAuth0 } from 'react-native-auth0';

export default function PlayedGamesScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [games, setGames] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();

  useEffect(() => {
    // Disable back gesture and set custom back handling
    navigation.setOptions({
      headerLeft: () => null,
      gestureEnabled: false,
    });

    // Handle hardware back button
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      );
      return true;
    });

    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    if (user) {
      fetch(`${'your backend api'}/${user.sub}`)
        .then((res) => res.json())
        .then((data) => {
          setGames(data.reverse());
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ff4b2b" />
        <Text style={styles.cardTitle}>Loading Your Game Details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125179/pngegg.61e13af42a8dafef9817_bjry7s.png' }}
        style={styles.headerImage}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Played Games</Text>
      </View>

      <FlatList
        data={games}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardMatch}>{item.player1} vs {item.player2}</Text>
            <Text style={styles.cardScore}>Score: {item.score1} - {item.score2}</Text>
            <Text style={styles.cardWin}>{item.winText}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.3,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: '15%',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderColor: '#ff4b2b',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cardMatch: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
    textAlign: 'center',
  },
  cardScore: {
    fontSize: 18,
    color: '#e0e0e0',
    textAlign: 'center',
  },
  cardWin: {
    fontSize: 16,
    color: '#bdbdbd',
    marginTop: 8,
    textAlign: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
});
