import React from 'react';
import Icon from 'react-native-vector-icons';
import {Background, Header, TextInput} from './styles';

export default function AddCard() {
  return (
    <Background>
      <Header>
        <Icon
          style={{justifyContent: 'flex-start'}}
          name="close"
          size={26}
          color="#fff"
        />
      </Header>
      <TextInput placeholder="Número do cartão" />
    </Background>
  );
}
