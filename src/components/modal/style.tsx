import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  modal: {
    width: width - 60,
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
  },
});

export default style;
