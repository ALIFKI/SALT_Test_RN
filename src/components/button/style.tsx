import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  buttonContainer: {
    width: '300px',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
  },
  buttonFull: {
    backgroundColor: '#3A4144',
  },
  buttonFullDisabled: {
    backgroundColor: '#CFCFCF',
  },
  buttonOutline: {
    // backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#3A4144',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  gray: {
    color: '#3A4144',
  },
  white: {
    color: '#FFF',
  },
});

export default style;
