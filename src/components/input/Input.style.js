import {StyleSheet} from 'react-native';
import fonts from '../../config/Fonts';
import colors from '../../config/Colors';

const Styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  containerStyle: {
    paddingHorizontal: 0,
    // marginBottom: 8,
  },
  inputStyle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    fontSize: 14,
  },
  labelStyle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    fontSize: 14,
    // marginBottom: 8,
  },
});

export default Styles;
