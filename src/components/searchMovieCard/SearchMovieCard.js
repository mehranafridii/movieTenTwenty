import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {images} from '../../config/Images';
import Utility from '../../utils/Utility';
import styles from './searchMovieCard.style';

const SearchMovieCard = ({movieItem}) => {
  const navigation = useNavigation();
  const {title, poster_path, id} = movieItem || {};

  return (
    <Pressable
      style={styles.topContainer}
      onPress={() =>
        navigation.navigate('MovieDetail', {movieDetail: movieItem})
      }>
      <Image
        style={styles.movieImage}
        source={{uri: Utility.getImageUrl(poster_path)}}
      />
      <View style={styles.movieDetailContainer}>
        <Text style={styles.movieTitle}>{title}</Text>
        <Text style={styles.genreStyle}>Genre</Text>
      </View>
      <Image source={images.settingIcon} />
    </Pressable>
  );
};

export default SearchMovieCard;
