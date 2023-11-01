import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PlayerProfile from '../components/player_profile';
import UserAvatar from 'react-native-user-avatar';



const profile = {
  name: 'Paolo',
  pic: require('../../assets/pics/cat.jpeg'),
  status: 'waiting',
};

const WaitingRoom = () => {
  return (
    <View style={styles.waiting_room_container}>
      <View style={styles.profile_container}>
        <PlayerProfile profile={profile}></PlayerProfile>
        <PlayerProfile profile={profile}></PlayerProfile>
        <PlayerProfile profile={profile}></PlayerProfile>
        <PlayerProfile profile={profile}></PlayerProfile>
      </View>
      <View style={{ borderTopWidth: 1, borderTopColor: 'black', width: '100%' }}></View>
      <View style={styles.buttons_container}>
        <TouchableOpacity style={styles.exit_button}>
          <Text style={{ ...styles.button_text, color: 'red' }}>Exit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ready_button}>
          <Text style={{ ...styles.button_text, color: 'white' }}>Ready</Text>
        </TouchableOpacity>
      </View>
      <View>
        <UserAvatar size={100} name="Avishay Bar" />
        <UserAvatar size={100} name="Avishay Bar" src="https://dummyimage.com/100x100/000/fff" />
        <UserAvatar size={50} name="John Doe" bgColors={['#ccc', '#fafafa', '#ccaabb']} />
        <UserAvatar size={50} name="John Doe" />
        <UserAvatar size={50} name="Jane Doe" bgColor="#000" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  waiting_room_container: {
    position: 'relative',
    height: '100%',
  },

  profile_container: {

  },

  buttons_container: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  exit_button: {
    width: '40%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  ready_button: {
    width: '40%',
    backgroundColor: 'hsla(211, 100%, 45%, 1)',
    padding: 15,
    borderRadius: 20,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
})

export default WaitingRoom;
