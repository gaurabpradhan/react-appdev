import React, { useContext } from 'react';
import { View, Text, FlatList, Button,Image } from 'react-native';
import { useProduct } from './reducerContext';
import styles from '../styles/styles'; 

export const CartScreen = ({ navigation }) => {
  const { state, dispatch } = useProduct();  // Use the context

 
  const removeFromCart = (itemID) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemID,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Your Cart</Text>
      {state.cart.length === 0 ? (
        <Text style={styles.txt2}>is empty!</Text>
      ) : (
        <FlatList
          data={state.cart}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => (
             <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      
              <Button color="red" title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CartScreen;