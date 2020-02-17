import React from 'react';
import Header from '~/components/Header';
import color from '~/styles/colors';
import shadow from '~/styles/shadow';
import {
  Background,
  Button,
  Title,
  Span,
  Image,
  Text,
  Content,
  View,
} from './styles';
import original from '~/assets/original.png';
import atm from '~/assets/atm.png';
import take from '~/assets/take.png';

export default function MoneyRemove() {
  return (
    <Background>
      <Header
        styleTitle={{paddingLeft: 20}}
        iconLeft="arrow-left"
        title="Retirar dinheiro"
        navLeft="Wallet"
        colorIcon={color.primary}
      />
      <Content>
        <Text>
          Escolha como você quer retirar dinheiro da sua conta PicPay Clone.
        </Text>

        <Button style={shadow}>
          <View>
            <Title>Saque 24Horas</Title>
            <Span>
              Retire seu dinheiro no{' '}
              <Span style={{fontWeight: 'bold', color: 'red'}}>
                Banco24Horas
              </Span>
            </Span>
          </View>
          <Image source={take} />
        </Button>
        <Button style={shadow}>
          <View>
            <Title>Transferência para conta bancária</Title>
            <Span>Disponivel em até 2 dias úteis</Span>
          </View>
          <Image source={atm} />
        </Button>
        <Button style={shadow}>
          <View>
            <Title>Depósito direto Banco Original</Title>
            <Span>Disponivel em até 1 hora dentro do horário comercial</Span>
          </View>
          <Image source={original} />
        </Button>
      </Content>
    </Background>
  );
}
