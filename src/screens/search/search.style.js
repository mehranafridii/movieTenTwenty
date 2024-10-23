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
  },
  contentStyle: {
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 100,
  },
  inputContainer: {
    borderRadius: 30,
    backgroundColor: colors.background10,
    borderBottomWidth: 0,
    paddingHorizontal: 20,
  },
  inputTopContainer: top => ({
    paddingTop: top,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  }),
  resultTextContainer: {
    paddingVertical: 10,
    marginTop: 20,
    borderBottomColor: colors.transparentWhite,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  resultText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 13,
    color: colors.black,
  },
});

export default styles;
