import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 16,
  },
  textNameProduct: {
    fontSize: 16,
    fontWeight: '700',
  },
  actionWrapper: {
    padding: 5,
    flexDirection: 'row',
    width: Dimensions.get('screen').width / 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
  },
  boxAction: {
    paddingVertical: 8,
    paddingHorizontal: 17,
    borderRadius: 5,
  },
  activeAction: {
    backgroundColor: '#3A4144',
  },
  disabledAction: {
    backgroundColor: '#CFCFCF',
  },
  actiontext: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  textSubtitle: {
    color: '#7D8285',
  },
  textCount: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default style;
