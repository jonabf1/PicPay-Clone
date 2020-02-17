import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Card = styled.View`
  padding: 20px;
  background: ${color.light};
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Profile = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 5px;
`;

export const Details = styled.View`
  flex-direction: row;
`;

export const DescriptionActivity = styled.Text`
  font-weight: 900;
  font-size: 14px;
  color: ${color.text4};
  margin: 10px 0 8px 0;
`;

export const FooterActivity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Organizer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MessageText = styled.Text`
  color: ${color.text4};
  font-weight: 900;
  margin-left: 5px;
  font-size: 16px;
`;

export const Separator = styled.View`
  width: 1px;
  height: 12px;
  margin: 0 8px 0 8px;
  border-right-width: 1px;
  border-right-color: ${color.inativeIcon};
`;

export const LikeText = styled.Text`
  color: ${color.text4};
  font-weight: 900;
  margin-left: 5px;
  font-size: 16px;
`;

export const TimeText = styled.Text`
  color: ${color.text4};
  margin-left: 5px;
  font-size: 14px;
  font-weight: 900;
`;
