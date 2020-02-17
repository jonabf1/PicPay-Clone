import React from 'react';

import {Background, Image, Text, Title} from './styles';
import Earth from '~/assets/earth.png';

export default function Place() {
  return (
    <Background>
      <Image source={Earth} />
      <Title>Nenhum resultado</Title>
      <Text>
        Procuramos por todos os cantos e não encontramos nenhum resultado para
        sua busca. Tente novamente.
      </Text>
    </Background>
  );
}
