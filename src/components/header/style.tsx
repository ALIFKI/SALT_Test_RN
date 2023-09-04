import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#D81A3C',
    height: '10%',
    position: 'absolute',
    left: 0,
    right: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    zIndex: 99,
  },
  fontTitle: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 20,
  },
  icon: {
    marginRight: 21,
  },
  fontSubtitle: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
