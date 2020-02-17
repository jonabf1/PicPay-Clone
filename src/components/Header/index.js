import React from 'react';
import {TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Title, TextRightHeader} from './styles';

function Header({
  title,
  navLeft,
  iconLeft,
  iconRight,
  navRight,
  colorIcon,
  navigation,
  TextRight,
  TextRightStyle,
  styleHeader,
  styleTitle,
}) {
  return (
    <Container style={styleHeader}>
      {iconLeft && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navLeft);
          }}>
          <Icon name={iconLeft} size={26} color={colorIcon} />
        </TouchableOpacity>
      )}
      <Title style={styleTitle}>{title}</Title>
      {iconRight && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navRight);
          }}>
          <Icon name={iconRight} size={26} color={colorIcon} />
        </TouchableOpacity>
      )}
      {TextRight && (
        <TouchableOpacity onPress={() => navigation.navigate(navRight)}>
          <TextRightHeader style={TextRightStyle}>{TextRight}</TextRightHeader>
        </TouchableOpacity>
      )}
    </Container>
  );
}

export default withNavigation(Header);
