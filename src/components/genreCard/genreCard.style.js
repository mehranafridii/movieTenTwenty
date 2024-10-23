import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    height: 110,
    width: width * 0.44,
  },
  title: {
    position: 'absolute',
    bottom: 15,
    left: 10,
    fontFamily: fonts.poppinsMedium,
    fontSize: 16,
    color: colors.white,
  },
});

export default styles;
