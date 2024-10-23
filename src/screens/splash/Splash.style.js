import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreen: {
    width,
    height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black10,
  },
  appNameStyle: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.poppinsBold,
    fontSize: 22,
  },
});

export default styles;
