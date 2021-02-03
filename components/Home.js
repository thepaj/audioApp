import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { mainBlue, secondBlue } from '../utils/colors';
import Thumbnail from '../utils/images/michal-main.png';
import { Audio } from 'expo-av';
import TAKJIZASMELIME from '../assets/sound/tak-ji-zasmelime.mp3';

export default function Home({ navigation }) {
    // const [sound, setSound] = React.useState();

    // async function playSound() {
    //     const { sound } = await Audio.Sound.createAsync(TAKJIZASMELIME)
        
    //     setSound(sound);
  
    //     await sound.playAsync(); 
    // }

    // React.useEffect(() => {
    //   return sound
    //     ? () => {
    //         sound.unloadAsync(); }
    //     : undefined;
    // }, [sound]);

    function onButtonNavigate() {
        navigation.navigate('Soundboard');
    }

    return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={Thumbnail} />
                </View>
                <View>
                    <Text style={styles.title}>Nazdar Trosko!</Text>
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={onButtonNavigate}>
                        <Text style={styles.btn} >Soundboard</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: mainBlue,
    },
    image: {
        width:300,
        height: 220
    },
    title: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 70,
    },
    btn: {
        color: '#fff',
        backgroundColor: secondBlue,
        marginTop: 40,
        paddingHorizontal: 100,
        paddingVertical: 20,
        borderRadius: 50,
    }
  });
