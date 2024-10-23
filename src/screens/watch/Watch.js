import React, {useCallback, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch} from 'react-redux';
import labels from '../../assets/labels/English.labels';
import Header from '../../components/header/Header';
import MovieCard from '../../components/movieCard/MovieCard';
import {images} from '../../config/Images';
import {
  useLazyGetGenreQuery,
  useLazyGetUpcomingMoviesQuery,
} from '../../services/AppServices';
import {setGenre} from '../../store/genreSlice';
import styles from './watch.style';

const Watch = ({navigation}) => {
  //API initialization
  const dispatch = useDispatch();
  const [upcomingMoviesApi, {data: upcomingMoviesData}] =
    useLazyGetUpcomingMoviesQuery();
  const [getGenreApi] = useLazyGetGenreQuery();
  console.log(upcomingMoviesData, 'sdjfkdsfdjkf');
  useEffect(() => {
    upcomingMoviesApi()?.unwrap();
    getGenreApi()
      ?.unwrap()
      ?.then(response => {
        const {genres} = response;
        dispatch(setGenre(genres));
      });
  }, []);

  //UI function
  const renderMovieCard = useCallback(({item, index}) => {
    return <MovieCard movieItem={item} />;
  }, []);

  //Main Return
  return (
    <View style={styles.fullScreen}>
      <Header
        leftText={labels.watch}
        rigthIcon={images.Search}
        rightPress={() => navigation.navigate('Search')}
      />
      <FlatList
        data={upcomingMoviesData?.results}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderMovieCard}
      />
    </View>
  );
};

export default Watch;
