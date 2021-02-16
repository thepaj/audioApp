import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { DATA } from '../utils/data';
import { mainBlue, secondBlue } from '../utils/colors';
import ImageMichal from '../utils/images/michal.jpeg';
import ImageMatka from '../utils/images/matka.jpeg';
import ImageIgor from '../utils/images/igor.png';
import { Audio } from 'expo-av';
import filter from 'lodash.filter';

export default function Soundboard() {
    const [sound, setSound] = React.useState();
    const [data, setData] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [fullData, setFullData] = React.useState([]);

    // sound code
    async function playSound(itemSound) {
        const { sound } = await Audio.Sound.createAsync(itemSound)
        
        setSound(sound);
  
        await sound.playAsync(); 
    }

    React.useEffect(() => {
      return sound
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    // Search code
    React.useEffect(() => {
      setData(DATA);
      setFullData(DATA);
    }, []);

    const handleSearch = text => {
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(fullData, item => {
        return contains(item, formattedQuery);
      });
      setData(filteredData);
      setQuery(text);
    };
    
    const contains = ( {title}, query) => {
      if (title.toLowerCase().includes(query)) {
          return true;
        }
    
      return false;
    };

        // defining ITEM
        const Item = ({ title, author, sound }) => (
          <TouchableOpacity style={styles.item} onPress={() => playSound(sound)}>
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
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                  <View style={styles.textInput}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        defaultValue={query}
                        onChangeText={queryText => handleSearch(queryText)}
                        placeholder="Hledej"
                        style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
                      />
                  </View>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: mainBlue,
    },
    textInput: {
      backgroundColor: '#fff',
      padding: 10,
      flex: 1,
      margin: 10,
      borderRadius: 25
    },
    item: {
        flex: 1,
        padding: 20,
        marginVertical: 10,
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
