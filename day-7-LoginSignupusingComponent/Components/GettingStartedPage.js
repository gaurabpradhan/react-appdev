import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const GettingStartedPage =({ToNext}) => {
    return(
      <View style={styles.container}> 
        <Button title="Getting Started" onPress={ToNext}/>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default GettingStartedPage;