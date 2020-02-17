import React, {useEffect} from 'react';
import logo from '../../assets/logo.png';
import {Container, Image, Text, Content} from './styles';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    function handleNavigateToIndex() {
      return setTimeout(() => {
        navigation.navigate('Index');
      }, 1500);
    }
    handleNavigateToIndex();
  }, [navigation]);
  return (
    <Container>
      <Content>
        <Image source={logo} />
        <Text>CLONE</Text>
      </Content>
    </Container>
  );
}
