import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Background = styled.View`
  flex: 1;
  background: ${color.light};
`;

export const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom-color: ${color.border2};
  border-bottom-width: 1px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${color.text};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-left: 20px;
  color: ${color.text4};
`;

export const Options = styled.View`
  padding: 0 20px 20px 20px;
`;

export const Organizer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${color.border3};
  border-bottom-width: 1px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const LastOrganizer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
