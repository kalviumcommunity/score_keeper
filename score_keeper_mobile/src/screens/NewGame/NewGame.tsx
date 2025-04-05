import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type GameAction = {
  action: 'increment';
  player: 'player1' | 'player2';
};

export default function PlayNewGame() {
  const navigation = useNavigation<any>();

  const [gameTitle, setGameTitle] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [actions, setActions] = useState<GameAction[]>([]);

  useEffect(() => {
    if (score1 >= 21 && Math.abs(score1 - score2) >= 2) {
      navigation.navigate('SemiResult', { player1, player2, score1, score2, gameTitle });
    }
    if (score2 >= 21 && Math.abs(score2 - score1) >= 2) {
      navigation.navigate('SemiResult', { player1, player2, score1, score2, gameTitle });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score1, score2]);

  const incrementScore = (player: 'player1' | 'player2') => {
    const newAction: GameAction = { action: 'increment', player };
    setActions([...actions, newAction]);
    if (player === 'player1') {
      setScore1(score1 + 1);
    } else {
      setScore2(score2 + 1);
    }
  };

  const undo = () => {
    const lastAction = actions.pop();
    if (!lastAction) {return;}
    setActions([...actions]);
    if (lastAction.player === 'player1') {
      setScore1(Math.max(score1 - 1, 0));
    } else {
      setScore2(Math.max(score2 - 1, 0));
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <Text style={styles.gameTitle}>{gameTitle || 'Enter Game Title'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Game Title"
        placeholderTextColor="#aaa"
        value={gameTitle}
        onChangeText={setGameTitle}
      />
      <View style={styles.imageContainer}>
        <ImageBackground
            source={{ uri: 'https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125671/court.8d55b1d6ed87b462129c_vjcx7n.png' }}
            style={styles.image}
            resizeMode="contain"
        />
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score1}</Text>
        <Text style={styles.vs}>vs</Text>
        <Text style={styles.score}>{score2}</Text>
      </View>


      <View style={styles.playersRow}>
        <TextInput
          style={styles.playerInput}
          placeholder="Player 1"
          placeholderTextColor="#ff4da6"
          value={player1}
          onChangeText={setPlayer1}
        />
        <TextInput
          style={styles.playerInput}
          placeholder="Player 2"
          placeholderTextColor="#4dff88"
          value={player2}
          onChangeText={setPlayer2}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonp1} onPress={() => incrementScore('player1')}>
          <Text style={styles.buttonText}>+1 P1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUndo} onPress={undo}>
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonp2} onPress={() => incrementScore('player2')}>
          <Text style={styles.buttonText}>+1 P2</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 24,
    justifyContent: 'center',
  },
  gameTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: '#eee',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  input: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 12,
    color: '#fff',
    fontSize: 18,
    padding: 12,
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  vs: {
    fontSize: 24,
    color: '#ccc',
  },
  playersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  playerInput: {
    flex: 0.48,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    color: '#fff',
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 12,
  },
  buttonp1: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 6,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: '#ff4da6',
  },
  buttonUndo: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 6,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: '#666',
  },
  buttonp2: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 6,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: '#4dff88',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
