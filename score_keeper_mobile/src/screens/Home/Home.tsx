import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert, BackHandler } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

export default function Home({ navigation }: { navigation: NavigationProp<any> }) {
    const { user, clearSession } = useAuth0();

    React.useEffect(() => {
        navigation.setOptions({
          headerLeft: () => null,
          gestureEnabled: false,
        });
      }, [navigation]);

      React.useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
          if (navigation.isFocused()) {
            Alert.alert(
              'Logout',
              'Do you want to Logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => null,
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                      clearSession();
                      navigation.navigate('LandingPage');
                  },
                },
              ],
              { cancelable: false }
            );
            return true;
          }
          return false;
        });

        return () => backHandler.remove();
      }, [navigation, clearSession]);

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
                <Text style={styles.heading}>
                    <Text style={styles.highlight}>Welcome {`${user?.name}`}</Text>
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewGame')}>
                    <Text style={styles.buttonText}>New Game</Text>
                </TouchableOpacity>
                {/* Start Button */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayedGames')}>
                    <Text style={styles.buttonText}>Played Games</Text>
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
        height: '70%',
        paddingTop: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 20,
    },
    heading: {
        fontSize: 29,
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
        width: '70%',
        height: 50,
        elevation: 5,
        shadowColor: '#000',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
