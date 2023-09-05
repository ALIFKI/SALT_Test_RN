import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import style from './style';

export interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: 'outline' | 'full';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({text, type, onClick, disabled}) => {
  const renderVariant = () => {
    switch (type) {
      case 'outline':
        return {
          bg: style.buttonOutline,
          colorFont: style.gray,
        };
      case 'full':
        return {
          bg: disabled ? style.buttonFullDisabled : style.buttonFull,
          colorFont: style.white,
        };
      default: {
      }
    }
  };
  return (
    <TouchableOpacity onPress={onClick} disabled={disabled}>
      <View style={[style.buttonContainer, renderVariant()?.bg]}>
        <Text style={[style.buttonText, renderVariant()?.colorFont]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
