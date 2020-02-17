import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Text,
  Container,
  CustomButtom,
  Background,
  Content,
  Header,
  SubHeader,
  OptionTitle,
  ContainerOption,
  TextInput,
  BoxInput,
} from './styles';
import color from '~/styles/colors';
import shadow from '~/styles/shadow';

import Store from './menu-top/Store';
import Principal from './menu-top/Principal';
import Place from './menu-top/Place/Place';

export default function Payment() {
  const [index, setIndex] = useState(1);

  return (
    <Background>
      <Header>
        <Icon name="qrcode-scan" size={30} color={color.primary} />
        <BoxInput>
          <Icon
            style={{marginLeft: 10}}
            name="magnify"
            size={24}
            color="#e1e1e9"
          />
          <TextInput placeholder="A quem você quer pagar?" />
        </BoxInput>
      </Header>
      <SubHeader>
        <ContainerOption
          style={
            index === 1 && {
              borderBottomColor: color.primary,
              borderBottomWidth: 2,
            }
          }
          onPress={() => setIndex(1)}>
          <OptionTitle
            style={{
              color: index === 1 ? color.primary : color.inativeIcon,
            }}>
            Principais
          </OptionTitle>
        </ContainerOption>
        <ContainerOption
          style={
            index === 2 && {
              borderBottomColor: color.primary,
              borderBottomWidth: 2,
            }
          }
          onPress={() => setIndex(2)}>
          <Icon
            name="map-marker"
            size={15}
            color={index === 2 ? color.primary : color.inativeIcon}
          />
          <OptionTitle
            style={{color: index === 2 ? color.primary : color.inativeIcon}}>
            Locais
          </OptionTitle>
        </ContainerOption>
        <ContainerOption
          style={
            index === 3 && {
              borderBottomColor: color.primary,
              borderBottomWidth: 2,
            }
          }
          onPress={() => setIndex(3)}>
          <Icon
            name="shopping"
            size={15}
            color={index === 3 ? color.primary : color.inativeIcon}
          />
          <OptionTitle
            style={{color: index === 3 ? color.primary : color.inativeIcon}}>
            Store
          </OptionTitle>
        </ContainerOption>
      </SubHeader>
      <Content>
        {index === 1 && <Principal />}
        {index === 2 && <Place />}
        {index === 3 && <Store />}
      </Content>
    </Background>
  );
}

Payment.navigationOptions = ({navigation}) => ({
  tabBarLabel: "'",
  tabBarIcon: ({tintColor}) => (
    <Container
      style={shadow}
      colors={
        tintColor === color.inativeIcon
          ? [color.gradient1, color.gradient2]
          : [color.activeIcon, color.activeIcon]
      }>
      <CustomButtom onPress={() => navigation.navigate('Payment')}>
        <Icon name="currency-usd" size={28} color="#fff" />
        <Text>Pagar</Text>
      </CustomButtom>
    </Container>
  ),
});
