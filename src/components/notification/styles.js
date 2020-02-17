import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Card = styled.View`
  padding: 15px;
  border-bottom-color: ${color.border};
  border-bottom-width: 1px;
  background: ${color.light};
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const Description = styled.Text`
  color: ${color.text5};
  font-size: 16px;
`;

export const CreatedAt = styled.Text`
  color: ${color.text4};
  margin-top: 10px;
`;

export const Code = styled.Text`
  font-weight: bold;
  color: ${color.text};
  font-size: 16px;
`;
