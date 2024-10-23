import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 78,
    borderRadius: 27,
    backgroundColor: colors.black10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elementView: {
    flex: 1,
    gap: 8,
  },
  tabText: isFocused => ({
    fontFamily: isFocused ? fonts.poppinsBold : fonts.poppinsRegular,
    alignSelf: 'center',
    fontSize: 12,
  }),
  tabImage: {
    alignSelf: 'center',
  },
});

export default styles;
