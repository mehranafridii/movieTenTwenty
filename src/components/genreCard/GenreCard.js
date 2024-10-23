import React from 'react';
import {ImageBackground, Pressable, Text} from 'react-native';
import Utility from '../../utils/Utility';
import styles from './genreCard.style';
import {images} from '../../config/Images';
import {useNavigation} from '@react-navigation/native';

const GenreCard = ({genreItem}) => {
  const navigation = useNavigation();
  const {name, id} = genreItem || {};
  console.log(images[name]);
  return (
    <Pressable
      style={{margin: 4}}
      onPress={() => navigation.navigate('SearchResult', {genreId: id})}>
      <ImageBackground
        source={images[name] || images.Comedy}
        style={styles.image}
        resizeMode="cover"
        borderRadius={10}>
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default GenreCard;
