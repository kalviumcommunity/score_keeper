import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useAuth0 } from 'react-native-auth0';


export default function LandingScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const {authorize, getCredentials, error, user, isLoading} = useAuth0();

  const loggedIn = user !== null;
  const handleLogin = async () => {
    if (user){
      navigation.navigate('Home');
      return;
    }
    try {
        await authorize();
    } catch (e) {
        console.log(e);
    }
    const credentials = await getCredentials();
    console.log('AccessToken: ' + credentials?.accessToken);
    if(loggedIn){
    navigation.navigate('Home');
    }
  };


  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }
  if (error) {
    return <View style={styles.container}><Text>{error.message}</Text></View>;
  }

  return (
    <View style={styles.container}>
      {/* Left Side - Image */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: 'https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125179/pngegg.61e13af42a8dafef9817_bjry7s.png' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Right Side - Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}><Text style={styles.highlight}>Score Keeper</Text></Text>
        <Text style={styles.subheading}>
          Go Beyond Play & Court
        </Text>
        <Text style={styles.description}>
          The beauty of the game is strength, stamina, and technique. When you shorten the game, technique goes for a toss, and the quality of badminton will surely go down in this system.
        </Text>

        {/* Start Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#121212',
    padding: 20,
  },
  imageContainer: {
    height: '55%',
    paddingTop: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
  },
  highlight: {
    color: '#ff4b2b',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#bdbdbd',
    marginBottom: 30,
    textAlign: 'justify',
  },
  button: {
    borderRadius: 30,
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
