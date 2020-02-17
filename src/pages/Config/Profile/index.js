import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Header,
  Background,
  Image,
  Username,
  NameComplete,
  Title,
  Social,
  Information,
  ProfileView,
  Box,
  Text,
  Count,
  Situation,
  ImageSimbol,
  Container,
} from './styles';
import color from '~/styles/colors';
import simbol from '~/assets/simbol.jpeg';

export default function Profile({navigation}) {
  return (
    <Background>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Icon name="arrow-left" size={26} color={color.light} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="dots-vertical" size={26} color={color.light} />
        </TouchableOpacity>
      </Header>
      <Container>
        <ProfileView>
          <Image
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/42827195?s=460&v=4',
            }}
          />
          <Username>@JonathanFranco</Username>
          <NameComplete>Jonathan Franco</NameComplete>
          <Box>
            <Social style={{marginRight: 100}}>
              <Count>34</Count>
              <Text>SEGUINDO</Text>
            </Social>
            <Social>
              <Count>451</Count>
              <Text>SEGUIDORES</Text>
            </Social>
          </Box>
        </ProfileView>
      </Container>
      <Information>
        <Title>ATIVIDADES</Title>
        <ImageSimbol source={simbol} />
        <Username>@JonathanFranco</Username>
        <Situation>não fez nenhuma transação ainda</Situation>
      </Information>
    </Background>
  );
}
