import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import GenreCard from '../../components/genreCard/GenreCard';
import Input from '../../components/input/Input';
import {images} from '../../config/Images';
import {useLazyGetGenreQuery} from '../../services/AppServices';
import styles from './library.style';

const Library = () => {
  const {top} = useSafeAreaInsets();
  // API initialization
  const [getGenreApi, {data: genreData}] = useLazyGetGenreQuery();
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    getGenreApi()?.unwrap();
  }, []);
  console.log(genreData, '');

  // Filter data based on the local search Value
  const filteredGenreData = genreData?.genres.filter(item =>
    item.name.toLowerCase().includes(searchValue?.toLowerCase()),
  );
  const renderGenreCard = useCallback(({item, index}) => {
    return <GenreCard genreItem={item} />;
  }, []);
  //main Return
  return (
    <View style={styles.fullScreen}>
      <View style={styles.inputTopContainer(top)}>
        <Input
          leftIcon={images.Search}
          inputContainerStyle={styles.inputContainer}
          pressOnRightIcon={() => setSearchValue('')}
          placeholder={'TV shows, movies and more'}
          rightIcon={images.closeIcon}
          value={searchValue}
          onChange={text => setSearchValue(text)}
        />
      </View>
      <FlatList
        data={filteredGenreData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        numColumns={2}
        renderItem={renderGenreCard}
      />
    </View>
  );
};

export default Library;
