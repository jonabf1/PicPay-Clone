import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-bottom-color: ${color.border};
  border-bottom-width: 0.5;
  background: ${color.tabBarColor};
`;

export const Title = styled.Text`
  color: ${color.text};
  font-size: 20px;
  font-weight: bold;
`;

export const TextRightHeader = styled.Text`
  font-size: 16px;
  color: #5bd79b;
  font-weight: bold;
`;
