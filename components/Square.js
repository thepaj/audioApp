import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Square extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Square</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00003f',
      margin: 5,
      padding: 50,
    },
    title: {
        textTransform: 'uppercase',
        color: '#fff',
    }
  });

export default Square;