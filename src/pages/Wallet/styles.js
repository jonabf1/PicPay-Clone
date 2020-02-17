import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import color from '~/styles/colors';

export const Background = styled.View`
  flex: 1;
  background: ${color.bgDashboard};
`;

export const ContentHeader = styled.View`
  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxAdd = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: ${color.light};
  border-radius: 10px;
  padding: 20px;
`;

export const ButtonBox = styled.View`
  flex-direction: row;
  margin: 35px 0 25px 0;
  align-items: center;
  justify-content: space-between;
`;

export const BorderIcon = styled.View`
  align-items: center;
  justify-content: center;
  border: 2px solid #dddddd;
  border-radius: 100px;
  padding: 2px;
`;

export const BorderIconHeader = styled.View`
  align-items: center;
  justify-content: center;
  border: 1px solid ${color.light};
  border-radius: 100px;
  padding: 2px;
`;

export const Container = styled.View`
  padding: 15px;
`;

export const UseMoney = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: ${color.light};
`;

export const BalanceBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Information = styled(TouchableOpacity)`
  width: 71%;
  height: 32%;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  border: 2px solid ${color.light};
  padding: 10px 40px 10px 40px;
`;

export const TitleHeader = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  color: ${color.light};
`;

export const BalanceText = styled.Text`
  color: ${color.light};
  font-size: 35px;
  margin-right: 10px;
`;

export const StatusBank = styled.Text`
  align-self: center;
  margin-top: 10px;
  font-size: 16px;
  color: ${color.light};
`;

export const ButtonText = styled.Text`
  color: ${color.light};
  font-size: 16px;
  margin-left: 10px;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #8f9d9d;
  text-align: left;
`;

export const UseMoneyText = styled.Text`
  font-size: 18px;
  color: #4a4a4a;
`;

export const FormsPaymentText = styled.Text`
  margin: 5px 0 10px 0;
  color: #8f9d9d;
  font-size: 16px;
`;

export const UseCodeText = styled.Text`
  text-align: center;
  color: ${color.primary};
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.primary};
`;

export const UseCodeBox = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const OptionText = styled.Text`
  color: ${color.primary};
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 70px;
  margin-left: 8%;
`;

export const ViewHeader = styled.View`
  max-width: 100%;
  max-height: 100%;
  background: ${props => props.tintColor && props.tintColor};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const ViewBorder = styled.View`
  max-width: 25px;
  max-height: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  right: 25px;
  border: 2px solid ${color.tabBarColor};
  border-radius: 30px;
`;
