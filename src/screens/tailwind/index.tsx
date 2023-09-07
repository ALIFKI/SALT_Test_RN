import {
  Text,
  Pressable,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import React, { FC, useRef } from 'react';
import { styled } from 'nativewind';
import { ArrowIcon, BgLogin, WelcomeIcon } from '../../helper/svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

const StyledView = styled(Animated.View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

export type TailwindScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Tailwind'
>;

const TailwindScreen: FC<TailwindScreenProps> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const bounce = () => {
    Animated.spring(fadeAnim, {
      toValue: 1,
      bounciness: 3,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Home');
    });
  };

  const transX = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -Dimensions.get('screen').width],
  });

  const transXR = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get('screen').width],
  });

  const opacity = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  return (
    <StyledView className="h-screen bg-[#FFF] p-8 relative">
      <StyledView
        style={[{ opacity: opacity, transform: [{ translateY: transX }] }]}
        className="absolute top-[-70%] left-[-199%] z-[-1]">
        <BgLogin />
      </StyledView>
      <StyledView className="h-3/4">
        <WelcomeIcon />
        <StyledText className="text-left text-2xl h-screen font-normal text-[#FFF] mt-4">
          Welcome Back
        </StyledText>
      </StyledView>
      <StyledView
        className="relative z-0"
        style={[{ transform: [{ translateY: transXR }] }]}>
        <TouchableOpacity
          onPress={() => {
            // fadeIn();
            bounce();
          }}>
          <StyledView className="w-100 h-[72px] bg-[#4960F9] justify-between items-center flex-row p-5 rounded-[28px]">
            <StyledText className="text-center text-lg font-normal text-[#FFF]">
              Sign in to
            </StyledText>
            <ArrowIcon />
          </StyledView>
        </TouchableOpacity>
        <StyledPressable
          onPress={() => {
            console.log('yes');
          }}>
          <StyledView className="mt-6 w-100 h-[72px] justify-between items-center flex-row p-5 rounded-[28px] border border-[#1433FF]">
            <StyledText className="text-center text-lg font-normal text-[#1433FF]">
              Sign Up
            </StyledText>
            <ArrowIcon />
          </StyledView>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
};

export default TailwindScreen;
