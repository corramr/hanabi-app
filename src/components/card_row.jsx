import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/card';

const Row = ({ numbers = [], color, isVertical }) => {
  const cardRowStyle = [
    styles.card_row,
    isVertical ? styles.vertical : styles.horizontal, // Apply vertical or horizontal style based on isVertical prop
  ];

  return (
    <View style={cardRowStyle}>
      <Card number={numbers[0]} color={color} />
      <Card number={numbers[1]} color={color} />
      <Card number={numbers[2]} color={color} />
      <Card number={numbers[3]} color={color} />
      <Card number={numbers[4]} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  card_row: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
});

export default Row;