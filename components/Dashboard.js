import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { secondBlue } from '../utils/colors';
import { Audio } from 'expo-av';

export default function Dashboard() {
    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/portret.mp3')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); 
    }
        return (
            <View style={styles.container}>
                <View>
                    <MaterialCommunityIcons name="fish" size={80} color="white" />
                </View>
                <View>
                    <Text style={styles.title}>Nazdar Trosky!</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={playSound}>
                        <Text style={styles.btn} >Rikej!</Text>
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
        justifyContent: 'center',
    },
    title: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 70,
    },
    btn: {
        color: '#fff',
        backgroundColor: secondBlue,
        paddingHorizontal: 130,
        paddingVertical: 20,
        borderRadius: 10,
    }
  });
