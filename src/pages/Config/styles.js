import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '~/styles/colors';

export const Background = styled.ScrollView`
  flex: 1;
  background: ${color.tabBarColor};
`;

export const Upload = styled(TouchableOpacity)`
  width: 105px;
  height: 105px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border: 2px solid #27cc7d;
  border-radius: 480px;
  opacity: 0.4;
  border-color: ${color.primary};
`;

export const SelectPhotoText = styled.Text`
  font-size: 18px;
  top: -65px;
  text-align: center;
  font-weight: bold;
  color: #11c76f;
`;

export const OptionHeader = styled.Text`
  font-size: 16px;
  color: #5bd79b;
  align-self: flex-end;
  font-weight: bold;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Header = styled.View`
  padding: 15px 10px 15px 15px;
`;

export const Profile = styled.View`
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #8ec29a;
  font-weight: bold;
`;

export const Username = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #555555;
`;

export const NameComplete = styled.Text`
  font-size: 16px;
  opacity: 0.5;
  color: ${color.text};
`;

export const ViewProfileText = styled.Text`
  color: ${color.primary};
  font-size: 14px;
  font-weight: bold;
`;

export const ProfileButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const PaddingColor = styled.View`
  padding: 30px 15px 8px 15px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;

export const Organizer = styled(TouchableOpacity)`
  padding: 10px 15px 15px 15px;
  border-bottom-color: #c8c8c8;
  border-bottom-width: 1px;
  background: ${color.light};
`;

export const Title = styled.Text`
  color: ${color.text};
  font-size: 14px;
`;

export const Description = styled.Text`
  font-size: 12px;
  opacity: 0.5;
  color: ${color.text};
`;

export const Footer = styled.Text`
  font-size: 14px;
  opacity: 0.5;
  color: ${color.text};
  text-align: center;
  margin: 3% 0 10% 0;
`;
