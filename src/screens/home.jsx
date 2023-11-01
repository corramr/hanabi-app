import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();
  return (
    <View style={StyleSheet.home_container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Hanabi</Text>
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity style={styles.play_button} onPress={() => navigation.navigate('WaitingRoom')}>
          <Text style={styles.play_button_text}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.play_button}>
          <Text style={styles.play_button_text}>Options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.play_button}>
          <Text style={styles.play_button_text}>Credits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

  home_container: {
    flexDirection: 'column',
  },

  title_container: {
    marginTop: 30,
    marginBottom: 40,
    alignSelf: 'center',
  },

  title_text: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',

  },

  button_container: {
    flexDirection: 'column',
    height:160,
    justifyContent: 'space-between'
  },

  play_button: {
    alignSelf: 'center',
    width: '45%',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },

  play_button_text: {
    color: '#fff',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
  },

})

export default Home