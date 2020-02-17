import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #11c770;
  padding: 20px;
  height: 12%;
`;

export const Background = styled.View`
  flex: 1;
  background: ${color.bgDashboard};
`;

export const Username = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  color: #555555;
`;

export const NameComplete = styled.Text`
  font-size: 14px;
  opacity: 0.5;
  color: ${color.text};
  font-weight: bold;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 11px;
  color: ${color.text};
  opacity: 0.4;
`;

export const Count = styled.Text`
  color: ${color.primary};
  font-weight: bold;
  font-size: 16px;
`;

export const Situation = styled.Text`
  font-size: 16px;
  color: gray;
  margin-top: 5px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${color.primary};
  font-weight: bold;
`;

export const Box = styled.View`
  background: ${color.tabBarColor};
  border-top-color: #e3e3e3;
  border-bottom-color: #e3e3e3;
  border-top-width: 1px;
  border-bottom-width: 1px;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  margin-top: 15px;
  width: 100%;
`;

export const ProfileView = styled.View`
  align-items: center;
  top: -35%;
`;

export const Container = styled.View`
  background: ${color.tabBarColor};
  padding: 20px;
`;

export const Image = styled.Image`
  width: 105px;
  height: 105px;
  border: 4px solid ${color.light};
  border-radius: 80px;
`;

export const ImageSimbol = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin-top: 15%;
  width: 55px;
  height: 55px;
`;

export const Social = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Information = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${color.bgDashboard};
  top: -90px;
`;
