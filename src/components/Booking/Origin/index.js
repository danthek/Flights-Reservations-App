import React, {useState} from 'react';
import {View, TouchableHighlight} from 'react-native';
import {
  Container,
  CustomInput,
  TitleScreen,
  NextButton,
  NextText,
  ArrowBack,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PickerData} from '../../Picker';

export const OriginScreen = ({navegacion}) => {
  return (
    <View>
      <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5C6EF8" />
        </TouchableHighlight>
      </ArrowBack>

      <TitleScreen>Where are you {'\n'}now?</TitleScreen>

      <Container>
        <PickerData />
      </Container>

      <NextButton onPress={() => navegacion.navigate('Destiny')}>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};