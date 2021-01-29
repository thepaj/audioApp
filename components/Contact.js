import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { secondBlue } from '../utils/colors';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Contact extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Nevahejte se na me obratit pokud mate jakkekoliv dotaze, napady nebo pripominky!</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.box} >
                        <FontAwesome5 name="laptop" size={24} color="white" />
                        <Text style={styles.infoText}>www.pavlajureckova.com</Text>
                    </View>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="email" size={24} color="white" />
                        <Text style={styles.infoText}>pavla.jureckova@gypri.cz</Text>
                    </View>
                    <View style={styles.iconBox}>
                        <FontAwesome name="linkedin-square" size={24} color="white" />
                        <FontAwesome name="github" size={24} color="white" />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    topContainer: {
        marginTop: 100,
    },
    title: {
        alignSelf: 'flex-start',
        textTransform: 'uppercase',
        alignSelf: 'center',
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
    },
    box: {
        backgroundColor: secondBlue,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 20,
        borderRadius: 10,
    },
    infoText: {
        color: '#fff',
        marginLeft: 20,
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10,
        padding: 20,
    }
  });

export default Contact;