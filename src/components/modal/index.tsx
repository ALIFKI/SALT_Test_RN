import { View, Modal } from 'react-native';
import React, { FC, ReactNode } from 'react';
import style from './style';

export interface ModalProps {
  isVisible: boolean;
  children: ReactNode;
}
const ModalComponent: FC<ModalProps> = ({ children, isVisible }) => {
  return (
    <>
      <Modal visible={isVisible} transparent={true}>
        <View style={[style.container]}>
          <View style={[style.modal]}>{children}</View>
        </View>
      </Modal>
    </>
  );
};

export default ModalComponent;
