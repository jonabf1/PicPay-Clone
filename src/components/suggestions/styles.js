import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import color from '~/styles/colors';

export const Option = styled(TouchableOpacity)`
  width: 75px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 75px;
  height: 75px;
  border: 3px solid ${color.light};
  border-radius: 480px;
`;

export const OptionText = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${color.light};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  margin-top: 4px;
`;
