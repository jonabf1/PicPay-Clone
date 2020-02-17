import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import color from '~/styles/colors';

export const Header = styled.View`
  background: ${color.tabBarColor};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Button = styled(TouchableOpacity)`
  margin: 0 10px 0 10px;
`;

export const Balance = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${color.text};
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 18px;
  top: -3px;
  color: ${color.text};
`;

export const Suggestions = styled.View`
  background: ${color.primary};
  padding: 20px 5px 0 15px;
`;

export const SuggestionText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${color.light};
`;

export const ListSuggestions = styled.FlatList.attrs({
  numColumns: 1,
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 15px;
  padding-bottom: 20px;
`;

export const Activity = styled.View`
  padding: 10px;
`;

export const HeaderActivity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 15px 0;
`;

export const TextActivity = styled.Text`
  color: ${color.text};
  font-weight: bold;
  font-size: 16px;
`;

export const OptionsFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
