import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const Styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: fonts.poppinsSemiBold,
    color: colors.white,
    textAlign: 'center',
  },
});

export default Styles;
