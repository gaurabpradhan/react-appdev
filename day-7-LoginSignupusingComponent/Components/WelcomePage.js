import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';

const WelcomePage = ({ username, ToNext, ToPrevious }) => {
    return (
      <View style={styles.container}>
        <Text>Welcome, {username}!</Text>
        <Button title="Go to Product Page" onPress={ToNext} />
        <Button title="Log Out" onPress={ToPrevious} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default WelcomePage;