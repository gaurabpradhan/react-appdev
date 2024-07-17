import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, price }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    backgroundColor : '#ffa',
    borderRadius : 10,
    padding: 20,
    shadowColor: '#000',
    shawdowRadius: 2,
    marginHorizontal: 15,
    marginVertical:10,
    shadowOpacity: 0.3,
 },

  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },

  price:{
    fontSize: 15,
    fontStyle: 'italic'
  }
})

export default Card;