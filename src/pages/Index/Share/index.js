import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Smile from '~/assets/Smile.png';
import Header from '~/components/Header';
import color from '~/styles/colors';
import {
  Content,
  Image,
  Title,
  Description,
  Cupom,
  CupomText,
  Span,
  SubTitle,
  Code,
  Organize,
  Name,
  Background,
  Limiter,
} from './styles';

export default function Share() {
  return (
    <Background>
      <Header
        styleHeader={{
          justifyContent: 'space-between',
        }}
        iconLeft="arrow-left"
        iconRight="share-variant"
        navLeft="Index"
        navRight="Index"
        colorIcon={color.primary}
        title="Indique e ganhe!"
      />
      <Content>
        <Image source={Smile} />
        <Title>Ganhe R$ 20 indicando seus amigos</Title>
        <Description>
          Pessoas que criarem a conta no PicPay Clone usando seu código de
          indicação ganharão de volta os primeiros R$ 20 gastos via cartão de
          crédito. E o melhor, é que assim que seu convidado ganhar, você também
          ganha R$ 20 pela indicação ;)
        </Description>
        <Cupom>
          <CupomText>
            Seu código:<Code> CLONE123</Code>
          </CupomText>
        </Cupom>
        <Span>Regulamento</Span>
        <SubTitle>COMPARTILHE SEU CÓDIGO:</SubTitle>
        <Organize>
          <Limiter style={{backgroundColor: '#25d366'}}>
            <Icon name="whatsapp" size={26} color="#fff" />
          </Limiter>
          <Name>WhatsApp</Name>
        </Organize>
        <Organize>
          <Limiter style={{backgroundColor: '#3b5998'}}>
            <Icon name="facebook" size={26} color="#fff" />
          </Limiter>
          <Name>Facebook</Name>
        </Organize>
        <Organize>
          <Limiter style={{backgroundColor: '#55acee'}}>
            <Icon name="twitter" size={26} color="#fff" />
          </Limiter>
          <Name>Twitter</Name>
        </Organize>
        <Organize>
          <Limiter style={{backgroundColor: '#000'}}>
            <Icon name="email" size={26} color="#fff" />
          </Limiter>
          <Name>Email</Name>
        </Organize>
        <Organize>
          <Limiter style={{backgroundColor: '#000'}}>
            <Icon name="link-variant" size={26} color="#fff" />
          </Limiter>
          <Name>Copiar link de indicação</Name>
        </Organize>
      </Content>
    </Background>
  );
}
