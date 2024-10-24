import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  movieImage: {width: 130, height: 100, borderRadius: 10},
  movieDetailContainer: {
    gap: 5,
    marginLeft: 15,
    flexGrow: 1,
    width: 0,
    marginRight: 10,
  },

  movieTitle: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 16,
    color: colors.black,
  },
  genreStyle: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
    color: colors.gray10,
  },
});

export default styles;
