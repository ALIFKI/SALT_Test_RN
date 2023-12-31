import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import style from './style';

export interface ItemListProps {
  name?: string;
  price?: number;
  onPlusPress: (index: number) => void;
  onMinusPress: (index: number) => void;
  count: number;
  index: number;
  stock: number;
}
const ListItem: FC<ItemListProps> = ({
  name,
  price,
  count,
  index,
  onMinusPress,
  onPlusPress,
  stock,
}) => {
  return (
    <View style={[style.container]}>
      <View style={{maxWidth: '40%'}}>
        <Text style={[style.textNameProduct]}>{name}</Text>
        <Text style={[style.textSubtitle]}>${price}</Text>
      </View>
      <View style={[style.actionWrapper]}>
        <TouchableOpacity
          disabled={count <= 0 ? true : false}
          onPressIn={() => {
            onMinusPress(index);
          }}>
          <View
            style={[
              style.boxAction,
              count <= 0 ? style.disabledAction : style.activeAction,
            ]}>
            <Text style={[style.actiontext]}>-</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={[style.textCount]}>{count ?? 0}</Text>
        </View>
        <TouchableOpacity
          disabled={count == stock ? true : false}
          onPressIn={() => {
            onPlusPress(index);
          }}>
          <View
            style={[
              style.boxAction,
              count == stock ? style.disabledAction : style.activeAction,
            ]}>
            <Text style={[style.actiontext]}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;
