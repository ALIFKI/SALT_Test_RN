import {View, Text} from 'react-native';
import React, {FC} from 'react';
import style from './style';

export interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: 'outline' | 'full';
}

const Button: FC<ButtonProps> = ({text, type}) => {
  const renderVariant = () => {
    switch (type) {
      case 'outline':
        return {
          bg: style.buttonOutline,
          colorFont: style.gray,
        };
      case 'full':
        return {
          bg: style.buttonFull,
          colorFont: style.white,
        }
      default: {
      }
    }
  };
  return (
    <View style={[style.buttonContainer, renderVariant()?.bg]}>
      <Text style={[style.buttonText, renderVariant()?.colorFont]}>{text}</Text>
    </View>
  );
};

export default Button;
