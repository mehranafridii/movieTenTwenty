/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../config/Images';
import styles from './Splash.style';
import {changeStack} from '../../navigation/NavigationService';
import labels from '../../assets/labels/English.labels';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const Splash = ({navigation}) => {
  useEffect(() => {
    async function navigate() {
      setTimeout(async function () {
        // navigation.replace('AppStack');
        changeStack('AppStack');
      }, 2000);
    }
    navigate();
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={styles.appNameStyle}>{labels.appName}</Text>
    </View>
  );
};

export default Splash;
