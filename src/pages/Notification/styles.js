import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Background = styled.View`
  flex: 1;
  background: ${color.light};
`;

export const Preview = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background: red;
  align-items: center;
  position: absolute;
  right: 26px;
  top: 3px;
`;

export const TextPreview = styled.Text`
  font-size: 13px;
  color: #fff;
  position: absolute;
  top: -1.5px;
`;

export const List = styled.FlatList.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
  width: 90%;
  align-self: center;
`;

export const Config = styled.Text`
  color: ${color.primary};
  font-size: 16px;
  font-weight: bold;
`;
