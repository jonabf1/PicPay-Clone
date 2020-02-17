import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMd from 'react-native-vector-icons/MaterialIcons';
import {Switch, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import card from '~/assets/card.png';
import color from '~/styles/colors';
import shadow from '~/styles/shadow';
import {
  Background,
  ContentHeader,
  TitleHeader,
  ButtonBox,
  Button,
  ButtonText,
  Description,
  Image,
  UseMoney,
  ViewHeader,
  ViewBorder,
  UseMoneyText,
  FormsPaymentText,
  Container,
  UseCodeBox,
  UseCodeText,
  BorderIcon,
  Information,
  Title,
  OptionText,
  BoxAdd,
  BalanceBox,
  BalanceText,
  StatusBank,
  BorderIconHeader,
} from './styles';

export default function Wallet({navigation}) {
  const [switchValue, setSwitchValue] = useState(true);
  const [valueHide, setValueHide] = useState(false);

  return (
    <Background>
      <LinearGradient
        start={{x: 0, y: 2}}
        end={{x: 1, y: 2}}
        style={{padding: 15}}
        colors={switchValue ? ['#56e482', '#10b95f'] : ['#d3d3d3', '#9e9e9e']}>
        <ContentHeader>
          <View />
          <TitleHeader>Saldo PicPay</TitleHeader>
          <BorderIconHeader>
            <IconMd name="equalizer" size={20} color={color.light} />
          </BorderIconHeader>
        </ContentHeader>
        <BalanceBox>
          <BalanceText>
            R${' '}
            <BalanceText style={{fontWeight: 'bold'}}>
              {valueHide ? '-----' : '95,34'}
            </BalanceText>
          </BalanceText>
          <TouchableOpacity onPress={() => setValueHide(!valueHide)}>
            {valueHide ? (
              <Icon name="eye-off-outline" size={26} color={color.light} />
            ) : (
              <Icon name="eye-outline" size={26} color={color.light} />
            )}
          </TouchableOpacity>
        </BalanceBox>
        <StatusBank>Seu saldo está rendendo 100% do CDI</StatusBank>
        <ButtonBox>
          <Button onPress={() => navigation.navigate('MoneyAdd')}>
            <Icon name="cellphone-iphone" size={26} color={color.light} />
            <ButtonText>Adicionar</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate('MoneyRemove')}>
            <Icon name="bank" size={26} color={color.light} />
            <ButtonText>Retirar</ButtonText>
          </Button>
        </ButtonBox>
      </LinearGradient>
      <UseMoney style={shadow}>
        <UseMoneyText>Usar saldo ao pagar</UseMoneyText>
        <Switch
          thumbColor={switchValue ? '#11c36d' : '#ececec'}
          trackColor={{false: '', true: '#b7edd1'}}
          onValueChange={setSwitchValue}
          value={switchValue}
        />
      </UseMoney>
      <Container>
        <FormsPaymentText>Formas de pagamento</FormsPaymentText>
        <Information onPress={() => navigation.navigate('AddCard')}>
          <View>
            <Title>Cadastre seu cartão de crédito</Title>
            <Description>
              Cadastre um cartão de crédito para poder fazer pagamentos mesmo
              quando não tiver saldo no seu PicPay Clone.
            </Description>
          </View>
          <Image source={card} />
        </Information>
        <BoxAdd onPress={() => navigation.navigate('AddCard')} style={shadow}>
          <BorderIcon>
            <Icon name="plus" size={26} color={color.primary} />
          </BorderIcon>
          <OptionText>Adicionar cartão de crédito</OptionText>
        </BoxAdd>
        <UseCodeBox onPress={() => {}}>
          <Icon name="cash-usd" size={26} color={color.primary} />
          <UseCodeText>Usar código promocional</UseCodeText>
        </UseCodeBox>
      </Container>
    </Background>
  );
}

Wallet.navigationOptions = {
  tabBarLabel: 'Carteira',
  tabBarIcon: ({tintColor}) => (
    <>
      <Icon name="credit-card" size={26} color={tintColor} />
      <ViewBorder>
        <ViewHeader tintColor={tintColor}>
          <Icon name="currency-usd" size={10} color="#fff" />
        </ViewHeader>
      </ViewBorder>
    </>
  ),
};
