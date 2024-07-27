import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, ImageBackground, Button, ScrollView,TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import { useProduct } from '../components/reducerContext';
import Icon from 'react-native-vector-icons/Octicons';

const Product = ({ catagory }) => {
  const { state, dispatch } = useProduct();
  const favorites = state.favorite;
  
 
 const items = [
 {id: '1', title: "af1", price:"$86", image:"https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTExNyx3XzE5ODYseF8xNCx5XzU3Mg==/bdaantdj5y6pgurjo4ku/nocta-nike-air-force-1-low-cz8065-100-pair.jpg?downsize=1840:*&output-format=auto&output-quality=auto"},
    {id: '2', title: "nike X tiffany", price:"$400", image:"https://culted.com/wp-content/uploads/2023/01/HEADER-@sneakernews-1-1920x1280.png"},
    {id: '3', title: "air jordan", price:"$103", image:"https://images-cdn.ubuy.co.in/634d139d183a133e4d32eaea-nike-air-jordan-1-high-og-unc-university.jpg"},
    {id: '4', title: "adidas aplhaboost", price:"$150", image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a804e729600440808f86af0e0115e823_9366/Alphaboost_V1_Shoes_White_HP2757_01_standard.jpg"},
    {id: '5', title: "adidas superstar", price:"$113", image:"https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg"},
  ]

  const toggleFavorite = (itemID) => {
    const isFavorite = favorites.find(favItem => favItem.id === itemID);
    dispatch({
      type: isFavorite ? 'REMOVE_FROM_FAVORITE' : 'ADD_TO_FAVORITE',
      payload:itemID,
    });
  };

  const toggleCart = (itemID) => {
    const isInCart = state.cart.find(cartItem => cartItem.id === itemID);
    dispatch({
      type: isInCart ? 'REMOVE_FROM_CART' : 'ADD_TO_CART',
      payload: itemID,
    });
  };

  return (
    <View style={{flex:1,justifyContent: 'center',}}>
       <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
             <View style={styles.card}>
       <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <TouchableOpacity onPress={()=> toggleFavorite(item)} style={styles.hearto}>
     <Icon 
      name="feed-heart"
      size = {30}
      color="red"/>
      </TouchableOpacity>
            <View style={styles.buttonSpacing} />
            <Button title='Add to Cart' onPress={() => toggleCart(item)} />
          </View>
          )}
      />
      </View>
  );
};

export default Product;

