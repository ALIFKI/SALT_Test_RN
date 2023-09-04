import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {MobileIcon} from '../../helper/svg';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
}
const Header: FC<HeaderProps> = ({title, subtitle}) => (
  <View style={[styles.headerContainer]}>
    <View style={[styles.icon]}>
      <MobileIcon />
    </View>
    <View>
      <Text style={[styles.fontTitle]}>{title}</Text>
      <Text style={[styles.fontSubtitle]}>{subtitle}</Text>
    </View>
  </View>
);

export default Header;
