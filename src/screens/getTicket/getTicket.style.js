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
  flatListContainer: {
    paddingVertical: 10,
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  dateContainer: {
    width: 67,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  topText: {
    flexDirection: 'row',
    gap: 9,
    paddingBottom: 5,
    marginLeft: 2,
  },
  timeText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
    color: colors.black,
  },
  hallText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: colors.black,
  },
  dateTitle: {
    marginHorizontal: 25,
    marginTop: 30,
    fontFamily: fonts.poppinsMedium,
    fontSize: 16,
    color: colors.black,
  },
  dateText: isSelected => ({
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 12,
    color: isSelected ? colors.white : colors.black,
  }),
  selectedDate: {
    backgroundColor: colors.blue, // Change to your desired color
  },
  imageContainer: {
    paddingVertical: 16,
    paddingHorizontal: 52,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 10,
  },
  grayText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: colors.gray20,
  },
  priceText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 12,
    color: colors.black,
  },
});

export default styles;
