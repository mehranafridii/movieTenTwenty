import React from 'react';
import {ImageBackground, Pressable, Text} from 'react-native';
import Utility from '../../utils/Utility';
import styles from './movieCard.style';
import {useNavigation} from '@react-navigation/native';

const MovieCard = ({movieItem}) => {
  const navigation = useNavigation();
  const {title, poster_path, id} = movieItem || {};
  console.log(movieItem, 'dskjfdskjfskdfjdksfj');
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('MovieDetail', {movieDetail: movieItem})
      }>
      <ImageBackground
        source={{uri: Utility.getImageUrl(poster_path)}}
        style={styles.movieImage}
        borderRadius={10}>
        <Text style={styles.movieTitle}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default MovieCard;
