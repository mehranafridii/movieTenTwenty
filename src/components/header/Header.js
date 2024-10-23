import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../config/Colors';
import styles from './header.style';

const Header = ({
  leftIcon,
  leftText,
  rigthIcon,
  centerText,
  leftPress,
  rightPress,
  additionalMainStyle,
  additionalCenterTextStyle,
  additionalContainerStyle,
}) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.mainHeaderContainer, {...additionalMainStyle}]}>
      <View style={[styles.topContainer(top), {...additionalContainerStyle}]}>
        {leftText ? (
          <Text style={styles.headerText}>{leftText}</Text>
        ) : (
          <Pressable
            onPress={() => leftPress()}
            style={styles.leftContainerStyle}>
            <Image source={leftIcon} />
          </Pressable>
        )}
        <Text style={[styles.headerText, {...additionalCenterTextStyle}]}>
          {centerText}
        </Text>
        <Pressable onPress={() => rightPress()}>
          <Image source={rigthIcon} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
