import React, {useCallback, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import labels from '../../assets/labels/English.labels';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import SearchMovieCard from '../../components/searchMovieCard/SearchMovieCard';
import {images} from '../../config/Images';
import {useLazySearchMovieQuery} from '../../services/AppServices';
import styles from './search.style';

const Search = () => {
  //API initialization
  const [getMovieBySearchApi, {data: bySearchMovies}] =
    useLazySearchMovieQuery();
  //Const
  const {top} = useSafeAreaInsets();
  //useStates
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(true);

  const handleSearch = () => {
    getMovieBySearchApi(searchValue)
      ?.unwrap()
      ?.then(resp => {
        setSearching(false);
      });
  };
  const renderGenreCard = useCallback(({item, index}) => {
    return <SearchMovieCard movieItem={item} />;
  }, []);
  //Main Return
  return (
    <View style={styles.fullScreen}>
      <View style={styles.inputTopContainer(top)}>
        {searching === true ? (
          <Input
            leftIcon={images.Search}
            inputContainerStyle={styles.inputContainer}
            placeholder={'TV shows, movies and more'}
            rightIcon={images.closeIcon}
            value={searchValue}
            onChange={text => setSearchValue(text)}
            onSubmitEditing={handleSearch}
            pressOnRightIcon={() => setSearchValue('')}
          />
        ) : (
          <Header
            leftIcon={images.goBackIcon}
            centerText={
              !!bySearchMovies?.results &&
              `${bySearchMovies?.results?.length} ${labels.resultsFound}`
            }
            additionalCenterTextStyle={{marginLeft: 25}}
            additionalContainerStyle={{marginTop: 0}}
            leftPress={() => setSearching(true)}
          />
        )}
      </View>
      {searching && (
        <View style={styles.resultTextContainer}>
          <Text style={styles.resultText}>{labels.topResults}</Text>
        </View>
      )}
      <FlatList
        data={bySearchMovies?.results || []}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        renderItem={renderGenreCard}
      />
    </View>
  );
};

export default Search;
