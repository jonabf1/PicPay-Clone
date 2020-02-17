import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import color from '~/styles/colors';

export const Container = styled(LinearGradient)`
  align-items: center;
  position: absolute;
  top: -18px;
  border-radius: 80px;
  width: 60px;
  height: 60px;
  box-shadow: 20px 20px 20px rgba(1, 0, 0, 0.8);
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 12px;
  box-shadow: 20px 20px 20px rgba(1, 0, 0, 0.8);
`;

export const CustomButtom = styled(TouchableOpacity)`
  color: #fff;
  bottom: -5px;
`;

export const Background = styled.View`
  background: ${color.light};
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: ${color.light};
  padding: 15px;
`;

export const Header = styled.SafeAreaView`
  padding: 10px 15px 10px 10px;
  background: ${color.tabBarColor};
  flex-direction: row;
  align-items: center;
`;

export const SubHeader = styled.View`
  background: ${color.tabBarColor};
  height: 8%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerOption = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

export const OptionTitle = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  font-size: 15px;
`;

export const BoxInput = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid #e1e1e9;
  background: #fff;
  border-radius: 130px;
  margin-left: 10px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'gray',
})`
  font-size: 14px;
  padding: 2px 0px 1px 5px;
`;

export const ListSuggestions = styled.FlatList.attrs({
  numColumns: 1,
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 15px;
  padding-bottom: 20px;
`;

export const Suggestions = styled.View`
  background: ${color.light};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #939395;
`;

export const Separator = styled.View`
  border-bottom-color: #dadada;
  border-bottom-width: 1px;
  margin: 10px 0 20px 0;
`;

export const News = styled.View`
  flex-direction: column;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 270px;
  height: 135px;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  margin-bottom: 15px;
`;
