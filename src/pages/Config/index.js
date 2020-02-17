import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMd from 'react-native-vector-icons/MaterialIcons';

import Color from '~/styles/colors';
import {
  Background,
  Image,
  SelectPhotoText,
  Upload,
  OptionHeader,
  Header,
  Container,
  Profile,
  SubTitle,
  Username,
  NameComplete,
  ProfileButton,
  ViewProfileText,
  PaddingColor,
  Organizer,
  Title,
  Footer,
  Description,
} from './styles';

export default function Config({navigation}) {
  return (
    <Background>
      <Header>
        <TouchableOpacity onPress={() => {}}>
          <OptionHeader>Ajuda</OptionHeader>
        </TouchableOpacity>
        <Container>
          <Upload>
            <Image
              source={{
                uri:
                  'https://avatars2.githubusercontent.com/u/42827195?s=460&v=4',
              }}
            />
            <SelectPhotoText>Enviar foto</SelectPhotoText>
          </Upload>
          <Profile>
            <Username>@JonathanFranco</Username>
            <NameComplete>Jonathan Franco</NameComplete>
            <ProfileButton onPress={() => navigation.navigate('Profile')}>
              <ViewProfileText>Ver meu perfil</ViewProfileText>
              <Icon name="chevron-right" size={15} color={Color.primary} />
            </ProfileButton>
          </Profile>
        </Container>
      </Header>
      <PaddingColor style={{paddingTop: 0}}>
        <SubTitle>Minha Conta</SubTitle>
      </PaddingColor>
      <Organizer>
        <Title>Meu número</Title>
        <Description>(19) 97168 9979</Description>
      </Organizer>
      <Organizer>
        <Title>Meu E-mail</Title>
        <Description>jonabf1@gmail.com</Description>
      </Organizer>
      <Organizer>
        <Title>Dados pessoais</Title>
        <Description>Nome, CPF e data de nascimento</Description>
      </Organizer>
      <Organizer>
        <Title>Conta bancária</Title>
      </Organizer>
      <Organizer>
        <Title>Taxas e limites</Title>
      </Organizer>
      <Organizer>
        <Title>Meus endereços</Title>
        <Description>Rua fulano de tal, 1234-SP</Description>
      </Organizer>
      <Organizer>
        <Title>Validar identidade</Title>
        <Description>Verificado</Description>
      </Organizer>
      <Organizer>
        <Title>Upgrade da conta</Title>
      </Organizer>

      <PaddingColor>
        <SubTitle>Promoções</SubTitle>
      </PaddingColor>
      <Organizer>
        <Title>Conta Universitária</Title>
      </Organizer>
      <Organizer>
        <Title>Usar código promocional</Title>
      </Organizer>
      <Organizer>
        <Title>Convide seus amigos</Title>
      </Organizer>

      <PaddingColor>
        <SubTitle>Minhas assinaturas</SubTitle>
      </PaddingColor>
      <Organizer>
        <Title>Ver minhas assinaturas</Title>
      </Organizer>

      <PaddingColor>
        <SubTitle>Para o meu negócio</SubTitle>
      </PaddingColor>
      <Organizer>
        <Title>PicPay PRO</Title>
      </Organizer>
      <Organizer>
        <Title>Para estabelecimentos</Title>
      </Organizer>
      <Organizer>
        <Title>Venda por assinaturas</Title>
      </Organizer>

      <PaddingColor>
        <SubTitle>Configurações</SubTitle>
      </PaddingColor>
      <Organizer>
        <Title>Usar digital para pagar</Title>
      </Organizer>
      <Organizer>
        <Title>Alterar senha</Title>
      </Organizer>
      <Organizer>
        <Title>Privacidade</Title>
      </Organizer>
      <Organizer>
        <Title>Notificações</Title>
      </Organizer>
      <Organizer>
        <Title>Contas vinculadas</Title>
      </Organizer>

      <PaddingColor>
        <SubTitle>Geral</SubTitle>
      </PaddingColor>
      <Organizer>
        <Title>Precisa de ajuda?</Title>
      </Organizer>
      <Organizer>
        <Title>Sobre o PicPay</Title>
      </Organizer>
      <Organizer>
        <Title>Desativar minha conta</Title>
      </Organizer>

      <Organizer style={{marginTop: 25}}>
        <Title style={{color: 'red'}}>Sair</Title>
      </Organizer>
      <Footer>PicPay Clone para Android v.1.0</Footer>
    </Background>
  );
}

Config.navigationOptions = {
  tabBarLabel: 'Ajustes',
  tabBarIcon: ({tintColor}) => (
    <IconMd name="settings" size={25} color={tintColor} />
  ),
};
