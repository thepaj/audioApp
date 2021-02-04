import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { mainBlue, secondBlue } from '../utils/colors';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

import LAPTOP from '../utils/images/icons/laptop.png';
import EMAIL from '../utils/images/icons/email.png';
import LINKEDIN from '../utils/images/icons/linkedin.png';
import GITHUB from '../utils/images/icons/github.png';
import AVATAR from '../utils/images/avatar.jpg';

class Contact extends React.Component {
    openMyWebsite = () => {
        WebBrowser.openBrowserAsync('https://www.pavlajureckova.com');
    }

    openMyLinkedin = () => {
        WebBrowser.openBrowserAsync('https://www.linkedin.com/in/pavla-jureckova/');
    }

    openMyGithub = () => {
        WebBrowser.openBrowserAsync('https://github.com/thepaj');
    }

    sendEmail = () => {
        Linking.openURL('mailto:pavla.jureckova@gypri.cz');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image source={AVATAR} style={styles.avatar} />
                </View>
                <View style={styles.iconBox}>
                    <TouchableOpacity onPress={this.openMyLinkedin} >
                        <Image source={LINKEDIN} style={styles.blueIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openMyGithub}>
                        <Image source={GITHUB} style={styles.blueIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity 
                        style={styles.box} 
                        onPress={this.openMyWebsite}
                        >
                        <Image source={LAPTOP} style={styles.whiteIcon}/> 
                        <Text style={styles.infoText}>www.pavlajureckova.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.box}
                        onPress={this.sendEmail}
                        >
                        <Image source={EMAIL} style={styles.whiteIcon}/> 
                        <Text style={styles.infoText}>pavla.jureckova@gypri.cz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBlue,
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 200,
        height: 200,
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
        padding: 15,
        marginTop: 30,
    },
    whiteIcon: {
        width: 35,
        height: 35
    },
    blueIcon: {
        width: 80,
        height: 80
    },
    bottomContainer: {
        marginBottom: 10,
    }
  });

export default Contact;