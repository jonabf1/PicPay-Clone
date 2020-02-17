import styled from 'styled-components/native';
import {Platform} from 'react-native';
import color from '~/styles/colors';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${color.primary};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin-top: 40px;
  width: 200px;
  height: 60px;
`;

export const Text = styled.Text`
  color: ${color.light};
  font-size: 22px;
  border: 1px solid #fff;
  border-radius: 5px;
  border-style: dashed;
  padding: 0px 7px 0px 7px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;
