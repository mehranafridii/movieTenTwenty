import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  mainHeaderContainer: {backgroundColor: colors.white},
  topContainer: top => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: top,
    // backgroundColor: colors.white,
  }),
  headerText: {
    flexGrow: 1,
    color: colors.black,
    fontFamily: fonts?.poppinsMedium,
    fontSize: 16,
  },
  leftContainerStyle: {
    // backgroundColor: '#FFFFFF',
    shadowColor: colors.black10,

    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,

    elevation: 7,
  },
});

export default styles;
