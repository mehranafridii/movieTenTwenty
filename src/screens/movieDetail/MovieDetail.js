import React, {useEffect} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import labels from '../../assets/labels/English.labels';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import {images} from '../../config/Images';
import {useLazyGetSpecificMovieByIdQuery} from '../../services/AppServices';
import {getGenreData} from '../../store/genreSlice';
import Utility from '../../utils/Utility';
import styles from './movieDetail.style';

const MovieDetail = ({navigation, route}) => {
  const {movieDetail} = route?.params;
  console.log(movieDetail, 'fjdkjfkdjfk');
  const genresData = useSelector(getGenreData);
  // API initialisation
  const [getMovieApi, {data: movieData}] = useLazyGetSpecificMovieByIdQuery();

  useEffect(() => {
    getMovieApi(movieDetail?.id)
      ?.unwrap()
      .then(response => console.log(response, 'skjfsdjfkdsjfkdsjfk'));
  }, []);
  const MovieData = movieData?.results?.find(item => item?.type === 'Trailer');
  const {title, poster_path, overview, genre_ids} = movieDetail || {};
  console.log(MovieData, 'dfjdksfj');
  const getGenreNamesByIds = genreIds => {
    return genreIds
      ?.map(id => {
        const genre = genresData?.find(genre => genre.id === id);
        return genre ? genre?.name : null; // Return null if genre not found
      })
      .filter(name => name !== null); // Filter out any null values
  };

  const renderGenreItem = (item, index) => {
    return (
      <View style={styles.genreItemContainer(item)}>
        <Text style={styles.genreText}>{item}</Text>
      </View>
    );
  };
  // Example usage
  const genreNames = getGenreNamesByIds(genre_ids);
  return (
    <View style={styles.fullScreen}>
      <ImageBackground
        source={{uri: Utility.getImageUrl(poster_path)}}
        style={styles.movieImage}>
        <Header
          additionalMainStyle={{backgroundColor: 'transparent'}}
          leftIcon={images.whiteGoBack}
          leftPress={() => navigation.goBack()}
        />
        <View style={styles.actionContainer}>
          <Text style={styles.dateText}>In theaters december 22, 2021</Text>
          <Button
            text="Get Ticket"
            onPress={() =>
              navigation.navigate('GetTicket', {movieData: movieDetail})
            }
            additionalStyle={{width: '62%'}}
          />
          <Button
            text="Watch Trailer"
            onPress={() =>
              navigation.navigate('WatchVideo', {movieData: MovieData})
            }
            additionalStyle={{width: '62%', backgroundColor: 'transparent'}}
          />
        </View>
      </ImageBackground>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.bottomContentContainer}>
          <Text style={styles.titleText}>{labels.genre}</Text>
          <View style={styles.mainGenreContainer}>
            {genreNames?.map(renderGenreItem)}
          </View>
          <Text style={styles.titleText}>{labels.overview}</Text>
          <Text style={styles.overViewText}>{overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
