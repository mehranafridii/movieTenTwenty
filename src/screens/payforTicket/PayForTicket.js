import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import {images} from '../../config/Images';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
import Button from '../../components/button/Button';
import styles from './payForTicket.style';

const PayForTicket = ({navigation, route}) => {
  const {height, width} = Dimensions.get('screen');
  const {movieData} = route?.params;
  const seatsBookingStatus = [
    {title: 'Selected', color: colors.Fiction},
    {title: 'Not available', color: colors.gray10},
    {title: 'VIP (150$)', color: colors.Animation},
    {title: 'Regular (50$)', color: colors.Action},
  ];
  const renderStatusUI = item => {
    return (
      <View style={styles.statusItemContainer}>
        <Image source={images.seatIcon} tintColor={item?.color} />
        <Text style={styles.statusTextStyle}>{item?.title}</Text>
      </View>
    );
  };
  // Main Return
  return (
    <View style={styles.fullScreen}>
      <Header
        leftIcon={images.goBackIcon}
        leftPress={() => navigation.goBack()}
        centerText={`${movieData?.title}\n In theaters december 22, 2021`}
        additionalCenterTextStyle={{textAlign: 'center'}}
      />
      <View style={styles.topSeatImage}>
        <Image
          source={images.numbers}
          resizeMode="cover"
          style={{height: 150, alignSelf: 'flex-end'}}
        />
        <Image
          source={images.bigSeats}
          resizeMode="contain"
          style={{height: 180, alignSelf: 'center'}}
        />
      </View>

      <View style={styles.statusContainer}>
        {seatsBookingStatus?.map(renderStatusUI)}
      </View>
      <View style={styles.selectedSeatContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.selectedSeatText}>4/</Text>
          <Text style={styles.totalSeatText}>3 row</Text>
        </View>
        <Image source={images.closeIcon} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={'Total Price \n $50'}
          onPress={() => {}}
          textStyle={{color: colors.black, textAlign: 'center'}}
          additionalStyle={styles.priceButton}
        />
        <Button
          text="Proceed to pay"
          onPress={() => {}}
          additionalStyle={styles.proceedButton}
        />
      </View>
    </View>
  );
};

export default PayForTicket;
