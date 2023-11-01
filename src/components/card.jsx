import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ number, color, isBigCard }) => {
  const cardContainerStyle = [
    styles.cardContainer,
    { borderColor: color },
    isBigCard && styles.bigCardContainer, // Apply bigCardContainer style if isBigCard is true
  ];
  const cardTextStyle = [
    styles.cardText,
    { color: color },
    isBigCard && styles.bigCardText, // Apply bigCardText style if isBigCard is true
  ];

  return (
    <View style={cardContainerStyle}>
      <Text style={cardTextStyle}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  bigCardContainer: {
    width: 30,
    height: 45,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bigCardText: {
    fontSize: 25,
  },
});

export default Card;