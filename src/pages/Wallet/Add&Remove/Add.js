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
import code from '~/assets/code.png';

export default function MoneyAdd() {
  return (
    <Background>
      <Header
        styleTitle={{paddingLeft: 20}}
        iconLeft="arrow-left"
        title="Adicionar dinheiro"
        navLeft="Wallet"
        colorIcon={color.primary}
      />
      <Content>
        <Text>
          Escolha como você quer adicionar dinheiro á sua conta do PicPay Clone.
        </Text>
        <Button style={shadow}>
          <View>
            <Title>Boleto bancário</Title>
            <Span>Disponivel em até 2 dias úteis</Span>
          </View>
          <Image source={code} />
        </Button>
        <Button style={shadow}>
          <View>
            <Title>Transferência bancária e TED/DOC</Title>
            <Span>TED - Em até 1h dentro de horário comercial.</Span>
            <Span>DOC - Próximo dia útil.</Span>
          </View>
          <Image source={atm} />
        </Button>
        <Button style={shadow}>
          <View>
            <Title>Banco Original</Title>
            <Span>Disponivel na hora</Span>
            <Span style={{color: 'green', fontWeight: 'bold'}}>
              Correntistas Original têm esta e outras vantagens exclusivas.
              Toque e saiba mais.
            </Span>
          </View>
          <Image source={original} />
        </Button>
      </Content>
    </Background>
  );
}
