import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Card from './card';
import Icon from '../../assets/icons/coin.svg'

const PlayerGame = ({ player_hand, profile = {}, token, isBigCard }) => {

  const colors = player_hand.map(card => card.color);
  const numbers = player_hand.map(card => card.number);

  return (
    <View style={styles.player_container}>
      <View style={styles.profile_container}>
        <Image source={profile.pic} style={styles.profile_pic} />
        <Text style={styles.username}>{profile.name}</Text>
      </View>
      <View style={styles.card_row_container}>
        {Array.from({ length: 5 }, (_, index) => (
          <Card key={index} color={colors[index]} number={numbers[index]} isBigCard={isBigCard} />
        ))}
      </View>
      <View style={styles.token_container}>
        {/* <Icon /> */}
        <View style={styles.token_badge}>
          <Text style={styles.token_badgeText}>{token}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  player_container: {
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'white',
  },

  card_row_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
  },

  profile_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile_pic: {
    width: 30,
    height: 30,
    objectFit: 'cover',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },

  username: {
    fontSize: 9,
    fontWeight: 'bold',
  },

  token_container: {
    position: 'relative',
  },

  token_badge: {
    position: 'absolute',
    top: -8,
    right: -3,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  token_badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },

});

export default PlayerGame;