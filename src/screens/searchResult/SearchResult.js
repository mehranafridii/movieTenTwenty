import React, {useCallback, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import labels from '../../assets/labels/English.labels';
import Header from '../../components/header/Header';
import SearchMovieCard from '../../components/searchMovieCard/SearchMovieCard';
import {images} from '../../config/Images';
import {
  useLazyGetMovieByGenreQuery,
  useLazySearchMovieQuery,
} from '../../services/AppServices';
import styles from './searchResult.style';

const SearchResult = ({navigation, route}) => {
  const {genreId, search} = route?.params;
  console.log(genreId);
  const [getMovieByGenreApi, {data: byGenreMovies}] =
    useLazyGetMovieByGenreQuery();
  const [getMovieBySearchApi, {data: bySearchMovies}] =
    useLazySearchMovieQuery();
  useEffect(() => {
    genreId
      ? getMovieByGenreApi(genreId)?.unwrap()
      : getMovieBySearchApi()?.unwrap();
  }, []);
  console.log(byGenreMovies, 'sdfksdfjkdfkdjf');
  console.log(bySearchMovies, 'bySearchMovies');

  const renderGenreCard = useCallback(({item, index}) => {
    return <SearchMovieCard movieItem={item} />;
  }, []);
  //Main Return
  return (
    <View style={styles.fullScreen}>
      <Header
        leftIcon={images.goBackIcon}
        centerText={
          !!byGenreMovies?.results &&
          `${byGenreMovies?.results?.length} ${labels.resultsFound}`
        }
        additionalCenterTextStyle={{marginLeft: 25}}
        leftPress={() => navigation.goBack()}
      />
      <FlatList
        data={byGenreMovies?.results}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        renderItem={renderGenreCard}
      />
    </View>
  );
};

export default SearchResult;
