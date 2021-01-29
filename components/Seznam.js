import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';
import { MICHAL, IGOR, MATKA } from '../utils/data';
import { secondBlue } from '../utils/colors';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import Square from './Square';
  
const Item = ({ title, author }) => (
    <View style={styles.item}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="pool" size={20} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
);

const renderItem = ({ item }) => (
    <Item title={item.title} author={item.author}/>
);

class Seznam extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={MICHAL}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
    },
    item: {
        flex: 1,
        padding: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: secondBlue,
    },
    iconContainer: {
      marginRight: 20,
      padding: 5,
    },
    title: {
      fontSize: 15,
      color: '#fff',
    },
    author: {
      fontSize: 10,
      color: '#fff',
    }
  });

export default Seznam;

