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
  movieImage: {
    width: '100%',
    height: height * 0.55,
  },
  actionContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 34,
    gap: 12,
    alignItems: 'center',
  },
  dateText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 16,
    color: colors.white,
  },
  titleText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 16,
    color: colors.black,
  },
  overViewText: {
    marginTop: 4,
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: colors.gray20,
  },
  bottomContentContainer: {paddingHorizontal: 40, marginTop: 25, gap: 10},
  mainGenreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.black,
    paddingBottom: 22,
  },
  genreItemContainer: item => ({
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: colors[item] || colors.Animation,
  }),
  genreText: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 12,
    color: colors.white,
  },
});

export default styles;
