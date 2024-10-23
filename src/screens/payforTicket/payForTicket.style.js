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
  statusItemContainer: {
    flexDirection: 'row',
    width: 130,
    gap: 14,
  },
  statusTextStyle: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
    color: colors.gray20,
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
  buttonContainer: {
    width: '100%',
    bottom: 30,
    position: 'absolute',
    flexDirection: 'row',
    //   backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  topSeatImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    gap: 8,
  },
  priceButton: {
    width: '35%',
    alignSelf: 'center',
    backgroundColor: colors.transformerBlack10,
  },
  proceedButton: {
    width: '60%',
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    paddingHorizontal: 25,
    marginTop: 40,
  },
  selectedSeatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 97,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.transformerBlack10,
    marginTop: 30,
    marginHorizontal: 20,
    gap: 8,
  },
  selectedSeatText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 14,
    color: colors.black,
  },
  totalSeatText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: colors.black,
  },
});

export default styles;
