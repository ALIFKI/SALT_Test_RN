import {View, Text} from 'react-native';
import React, {FC} from 'react';
import style from './style';
import {MobileLoadingIcon} from '../../helper/svg';

export interface LoadingProps {
  isLoading: boolean;
}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <View style={[style.loadingContainer]}>
      <MobileLoadingIcon />
      <Text style={[style.textLoading, style.titleText]}>
        Loading Product Data
      </Text>
      <Text style={[style.textLoading]}>Please wait...</Text>
    </View>
  );
};

export default Loading;
