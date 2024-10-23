import {View, Text, Dimensions, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './watchVideo.style';
import YoutubePlayer from 'react-native-youtube-iframe';
import {ActivityIndicator} from 'react-native';
import Header from '../../components/header/Header';
import {images} from '../../config/Images';

const WatchVideo = ({navigation, route}) => {
  const [loader, setLoader] = useState(true);
  const {width, height} = Dimensions.get('screen');
  const {movieData} = route?.params;
  const handleVideoStateChange = state => {
    if (state === 'ended') {
      navigation.goBack();
    }
  };
  const handleReady = () => {
    setLoader(false);
  };
  //
  return (
    <View style={styles.fullScreen}>
      <Header
        leftIcon={images.goBackIcon}
        leftPress={() => navigation.goBack()}
      />

      {loader && (
        <ActivityIndicator size={45} style={{alignSelf: 'center', flex: 1}} />
      )}

      <YoutubePlayer
        height={loader === false ? height : 0}
        width={loader === false ? width : 0}
        play={true}
        videoId={movieData?.key}
        onChangeState={handleVideoStateChange}
        onReady={handleReady}
      />
    </View>
  );
};

export default WatchVideo;
