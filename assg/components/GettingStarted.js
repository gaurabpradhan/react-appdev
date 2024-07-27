import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import styles from '../styles/styles';
 
 const GettingStarted = ({ navigation }) => {
  return (
          <View style={styles.container}>
            
            <Text style={styles.txt}>SneakerHead</Text>
          <Button color="green" title="Jump In!" onPress={() => navigation.navigate('SignUp')} />
         </View>
        
      );
      };
export default GettingStarted;