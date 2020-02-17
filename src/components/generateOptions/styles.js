import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const ButtonOption = styled(TouchableOpacity)`
  padding: 15px 15px 0 0;
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 5px; */
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const TitleButton = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-right: 2px;
`;

export const DescriptionButton = styled.Text`
  color: #939395;
`;

export const Content = styled.View``;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Point = styled.View`
  border-radius: 50px;
  background: #939395;
  width: 3px;
  height: 3px;
  margin-left: 5px;
`;

export const Distance = styled.Text`
  color: #939395;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
`;
