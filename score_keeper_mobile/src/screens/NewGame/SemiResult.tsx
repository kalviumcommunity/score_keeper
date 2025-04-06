import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { useAuth0 } from 'react-native-auth0';
import Toast from 'react-native-toast-message';

type ParamList = {
  SemiResult: {
    gameTitle: string;
    player1: string;
    player2: string;
    score1: number;
    score2: number;
  };
};

export default function SemiResult({ navigation }: { navigation: NavigationProp<any> }) {
  const route = useRoute<RouteProp<ParamList, 'SemiResult'>>();
  const { user } = useAuth0();

  const { gameTitle, player1, player2, score1, score2 } = route.params;
  const [winner, setWinner] = useState('');
  const [winnerScore, setWinnerScore] = useState(0);
  const [loserScore, setLoserScore] = useState(0);

  useEffect(() => {
    if (score1 > score2) {
      setWinner(player1);
      setWinnerScore(score1);
      setLoserScore(score2);
    } else {
      setWinner(player2);
      setWinnerScore(score2);
      setLoserScore(score1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async () => {
  if (!user?.sub) {
    Alert.alert('Error', 'You must be logged in to save games');
    return;
  }

  try {
    const payload = {
      authId: user.sub,
      title: gameTitle,
      player1: player1,
      player2: player2,
      score1: score1,
      score2: score2,
      winText: `${winner} wins the game with a score of ${winnerScore}/ ${loserScore}`,
    };

    const response = await fetch('your backend api', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server error:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Only read the response once
    console.log('Response status:', response.status);
    Toast.show({
      type: 'success',
      text1: 'Saved',
      text2: 'Game saved successfully 🎉',
      position: 'top',
    });
    navigation.navigate('PlayedGames');
  } catch (error) {
    console.error('Save error:', error);
    Alert.alert(
      'Error',
      'Failed to save the game. Please try again.'
    );
  }
};

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125179/pngegg.61e13af42a8dafef9817_bjry7s.png' }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>{gameTitle}</Text>

      <View style={styles.scoreContainer}>
        <View style={styles.player}>
          <Text style={styles.playerName}>{player1}</Text>
          <Text style={styles.score}>{score1}</Text>
        </View>

        <Text style={styles.vs}>vs</Text>

        <View style={styles.player}>
          <Text style={styles.playerName}>{player2}</Text>
          <Text style={styles.score}>{score2}</Text>
        </View>
      </View>

      <Text style={styles.winText}>
        {winner} wins the game with a score of {winnerScore} / {loserScore}
      </Text>

      <View style={styles.saveButton}>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.buttonText}>Save Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  headerImage: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: { fontSize: 40, fontWeight: 'bold', marginBottom: 30, color: 'red' },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  player: { alignItems: 'center', marginHorizontal: 20 },
  playerName: { fontSize: 18, fontWeight: '500', color: '#eee' },
  score: { fontSize: 32, fontWeight: 'bold', marginTop: 5, color: '#eee' },
  vs: { fontSize: 35, marginHorizontal: 10, color: '#eee', fontWeight: 'bold' },
  winText: { fontSize: 15, textAlign: 'center', marginBottom: 30, color: '#bdbdbd' },
  saveButton: { borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'red',
    paddingVertical: 9,
    paddingHorizontal: 65,
    elevation: 5,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
