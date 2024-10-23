import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  movieImage: {
    width: '100%',
    height: 180,
  },
  movieTitle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontFamily: fonts.poppinsMedium,
    fontSize: 18,
    color: colors.white,
  },
});

export default styles;
