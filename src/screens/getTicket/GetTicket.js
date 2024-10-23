import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './getTicket.style';
import Header from '../../components/header/Header';
import {images} from '../../config/Images';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
import Button from '../../components/button/Button';

const GetTicket = ({navigation, route}) => {
  const {movieData} = route?.params;
  console.log(movieData, 'dskfjksdjfkdsjfkdsjf');
  const [selectedDate, setSelectedDate] = useState('6 Mar');
  const dummyDates = [
    '6 Mar',
    '7 Mar',
    '8 Mar',
    '9 Mar',
    '10 Mar',
    '11 Mar',
    '12 Mar',
    '13 Mar',
    '14 Mar',
    '15 Mar',
    '16 Mar',
  ];
  const dummyDataForSeats = [
    {
      time: '12:30',
      hall: 'Cinetech + Hall 1',
      startPrice: '$50',
      endPrice: '$75',
    },
    {
      time: '08:30',
      hall: 'Cinetech + Hall 2',
      startPrice: '$50',
      endPrice: '$75',
    },
    {
      time: '09:30',
      hall: 'Cinetech + Hall 3',
      startPrice: '$50',
      endPrice: '$75',
    },
    {
      time: '1:30',
      hall: 'Cinetech + Hall 4',
      startPrice: '$50',
      endPrice: '$75',
    },
  ];
  const renderDates = ({item}) => {
    const isSelected = selectedDate === item;

    return (
      <TouchableOpacity
        style={[styles.dateContainer, isSelected && styles.selectedDate]}
        onPress={() => setSelectedDate(item)}>
        <Text style={styles.dateText(isSelected)}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const renderSeatsUI = ({item}) => {
    const {time, startPrice, hall, endPrice} = item;
    return (
      <View>
        <View style={styles.topText}>
          <Text style={styles.timeText}>{time}</Text>
          <Text style={styles.hallText}>{hall}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={images.seats} />
        </View>
        <View style={{flexDirection: 'row', gap: 3, marginTop: 10}}>
          <Text style={styles.grayText}>From</Text>
          <Text style={styles.priceText}>{startPrice}</Text>
          <Text style={styles.grayText}>or</Text>
          <Text style={styles.priceText}>{endPrice}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.fullScreen}>
      <Header
        leftIcon={images.goBackIcon}
        leftPress={() => navigation.goBack()}
        centerText={`${movieData?.title}\n In theaters december 22, 2021`}
        additionalCenterTextStyle={{textAlign: 'center'}}
      />
      <Text style={styles.dateTitle}>Date</Text>
      <View>
        <FlatList
          data={dummyDates}
          contentContainerStyle={styles.flatListContainer}
          renderItem={renderDates}
          horizontal
        />
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, gap: 10, marginTop: 40}}
          data={dummyDataForSeats}
          renderItem={renderSeatsUI}
        />
      </View>
      <Button
        text="Select Seats"
        onPress={() =>
          navigation.navigate('PayForTicket', {movieData: movieData})
        }
        additionalStyle={{
          width: '90%',
          alignSelf: 'center',
          bottom: 30,
          position: 'absolute',
        }}
      />
    </View>
  );
};

export default GetTicket;
