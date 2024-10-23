import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../config/Colors';
import {images} from '../../config/Images';
import styles from './BotttomTab.style';

const BottomTab = ({navigation, state}) => {
  //Tab UI function for each Element
  const tabUI = (item, isFocused) => {
    return (
      <Pressable
        style={styles.elementView}
        onPress={() => navigation.navigate(item.name)}>
        <Image
          style={styles.tabImage}
          source={images[item.name]}
          resizeMode={'contain'}
          tintColor={isFocused ? colors.white : colors.gray}
        />
        <Text
          style={[
            styles.tabText(isFocused),
            {color: isFocused ? colors.white : colors.gray},
          ]}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        return tabUI(route, isFocused);
      })}
    </View>
  );
};

export default BottomTab;
