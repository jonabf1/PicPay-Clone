import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import color from '~/styles/colors';

export const Background = styled.View`
  flex: 1;
  background: ${color.tabBarColor};
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Button = styled(TouchableOpacity)`
  border-radius: 6px;
  padding: 15px 15px 15px 30px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: ${color.light};
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const Text = styled.Text`
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const Span = styled.Text`
  margin-top: 2px;
  color: #8f929d;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
`;

export const View = styled.View`
  width: 80%;
`;
