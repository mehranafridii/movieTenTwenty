import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
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
    paddingHorizontal: 20,
    paddingBottom: 100,
    alignItems: 'center',
    paddingTop: 30,
  },
  inputTopContainer: top => ({
    paddingTop: top,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  }),
  inputContainer: {
    borderRadius: 30,
    backgroundColor: colors.background10,
    borderBottomWidth: 0,
    paddingHorizontal: 20,
  },
});

export default styles;
