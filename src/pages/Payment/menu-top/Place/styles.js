import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 20px 20px;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: 8px;
  font-weight: bold;
  color: #939395;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${color.text};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 160px;
  height: 140px;
`;
