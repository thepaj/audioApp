import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { DATA } from '../utils/data';
import { mainBlue, secondBlue } from '../utils/colors';
import ImageMichal from '../utils/images/michal.jpeg';
import ImageMatka from '../utils/images/matka.jpeg';
import ImageIgor from '../utils/images/igor.png';
import { Audio } from 'expo-av';
import TYTAKYSIPIL from '../assets/sound/ty-taky-si-pil.mp3';

export default function Seznam() {
    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(TYTAKYSIPIL)
        
        setSound(sound);
  
        await sound.playAsync(); 
    }

    React.useEffect(() => {
      return sound
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
  

    // defining ITEM
    const Item = ({ title, author, sound }) => (
      <TouchableOpacity style={styles.item} onPress={playSound}>
        <View style={styles.iconContainer}>
          {author === 'Michal Kratejl' &&
            <Image style={styles.avatar} source={ImageMichal}/>
          } 
          {author === 'Matka' &&
            <Image style={styles.avatar} source={ImageMatka}/>
          }
          {author === 'Igor Chaun' &&
            <Image style={styles.avatar} source={ImageIgor}/>
          }
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
      <Item title={item.title} author={item.author} sound={item.sound}/>
    );

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: mainBlue,
    },
    item: {
        flex: 1,
        padding: 20,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: secondBlue,
    },
    iconContainer: {
      marginRight: 20,
      padding: 2,
    },
    textContainer: {
      width: 240,
      padding: 2,
    },
    title: {
      fontSize: 15,
      color: '#fff',
    },
    avatar: {
      borderRadius: 100,
      height: 40,
      width: 40,
    },
    author: {
      fontSize: 10,
      color: '#fff',
    }
});



