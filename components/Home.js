import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { mainBlue, secondBlue } from '../utils/colors';
import Thumbnail from '../utils/images/michal-main.png';

export default function Home({ navigation }) {
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
                <View >
                    <TouchableOpacity onPress={onButtonNavigate}>
                        <Text style={styles.btn} >Hlášky</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainBlue,
        padding: 20,
    },
    image: {
        width:300,
        height: 220
    },
    title: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 70,
        textAlign: 'center',
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
