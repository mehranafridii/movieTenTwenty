import {Dimensions, StyleSheet} from 'react-native';
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
    gap: 20,
    paddingBottom: 50,
  },
});

export default styles;
