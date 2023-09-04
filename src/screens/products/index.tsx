/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import Button from '../../components/button';
import Loading from '../../components/loading';
import {SortIcon} from '../../helper/svg';
import ListItem from '../../components/listItem';
import DropDownPicker from 'react-native-dropdown-picker';
import http from '../../helper/http';

const ProductsScreens = () => {
  const [data, setData] = useState([
    {id: 1, title: '', price: '', count: 0},
    {id: 2, title: '', price: '', count: 0},
    {id: 3, title: '', price: '', count: 0},
  ]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const getProductList = () => {
    http({})
      .get('products')
      .then(res => {
        const {data} = res;
        setData(data?.products);
      });
  };

  useEffect(() => {
    getProductList();
    return () => {};
  }, []);

  const onPlusPress = (index: number) => {
    let item = data[index];
    if (item.count) {
      item.count += 1;
      data[index] = item;
      setData([...data]);
    } else {
      item.count = 1;
      data[index] = item;
      setData([...data]);
    }
  };

  const onMinusPress = (index: number) => {
    let item = data[index];
    if (item.count) {
      if (item.count > 0) {
        item.count -= 1;
        data[index] = item;
        setData([...data]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Products List'} subtitle="3 Products" />
      {loading ? (
        <Loading isLoading />
      ) : (
        <>
          <View style={[styles.content]}>
            <View style={[styles.filterSection]}>
              <View style={[styles.filterTextIconWrapper]}>
                <SortIcon />
                <Text style={[{marginLeft: 10}]}>Sort By:</Text>
              </View>
              <View>
                <View>
                  <DropDownPicker
                    dropDownContainerStyle={{
                      backgroundColor: '#FFF',
                      borderRadius: 10,
                      borderWidth: 0,
                      marginTop: 10,
                      ...styles.boxShadow,
                    }}
                    style={{
                      width: Dimensions.get('screen').width / 4,
                      borderColor: '#F0F0F0',
                      backgroundColor: '#F6F6F6',
                    }}
                    open={open}
                    value={value}
                    items={items}
                    placeholderStyle={{fontWeight: 'bold'}}
                    placeholder="Default"
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
              </View>
            </View>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <ListItem
                  name={item.title}
                  price={item.price}
                  onPlusPress={onPlusPress}
                  onMinusPress={onMinusPress}
                  count={item.count ?? 0}
                  index={index}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={[styles.footer, styles.boxShadow]}>
            <View style={[styles.amountWrapper]}>
              <Text style={[styles.amount]}>Total: </Text>
              <Text style={[styles.amount]}>Rp.11000000 </Text>
            </View>
            <View>
              <Button
                text="Checkout"
                type="full"
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductsScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFF',
  },
  content: {
    marginTop: '25%',
    flex: 1,
    padding: 16,
  },
  filterSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 30,
    position: 'relative',
    zIndex: 99,
  },
  filterTextIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 17,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});