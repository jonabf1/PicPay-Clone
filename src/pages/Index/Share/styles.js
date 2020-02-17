import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import color from '~/styles/colors';

export const Background = styled.ScrollView`
  flex: 1;
  background: ${color.light};
`;

export const Content = styled.View`
  align-items: center;
`;

export const Cupom = styled.View`
  border: 1px solid #000;
  margin-bottom: 15px;
  border-radius: 100px;
  border-style: dashed;
  padding: 5px 40px 5px 40px;
  border-color: #bbbbbb;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 150px;
  height: 100px;
  margin-top: 20px;
`;

export const Organize = styled(TouchableOpacity)`
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: center;
  background: ${color.tabBarColor};
  border-radius: 100px;
  width: 80%;
  padding: 10px 0px 10px 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #666666;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
  color: #666666;
  padding: 0px 20px 10px 20px;
`;

export const CupomText = styled.Text`
  color: #929292;
  font-size: 18px;
`;

export const Span = styled.Text`
  border-bottom-color: #000;
  border-bottom-width: 0.5px;
  color: #666666;
  margin-bottom: 20px;
`;

export const SubTitle = styled.Text`
  border-top-color: #e3e3e3;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-bottom: 15px;
  border-top-width: 1px;
  background: ${color.tabBarColor};
`;

export const Code = styled.Text`
  color: ${color.primary};
  font-size: 18px;
`;

export const Name = styled.Text`
  margin-left: 10px;
`;

export const Limiter = styled.View`
  padding: 5px;
  align-items: center;
  border-radius: 30px;
`;
