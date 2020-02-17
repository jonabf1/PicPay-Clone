import React, {useState} from 'react';
import {Switch} from 'react-native';
import color from '~/styles/colors';
import {
  Background,
  SubTitle,
  Options,
  Organizer,
  Text,
  Container,
  LastOrganizer,
} from './styles';
import Header from '~/components/Header';

export default function NavigationOptions() {
  const [switchValue, setSwitchValue] = useState(false);
  const [switchValue2, setSwitchValue2] = useState(false);
  const [switchValue3, setSwitchValue3] = useState(false);

  return (
    <Background>
      <Header
        title="Notificações"
        styleTitle={{marginLeft: 20}}
        iconLeft="arrow-left"
        colorIcon={color.primary}
        navLeft="Notification"
      />
      <Container>
        <SubTitle>Receber notificações pelo celular</SubTitle>
      </Container>
      <Options>
        <Organizer>
          <Text>Novas curtidas</Text>
          <Switch
            thumbColor={switchValue ? '#11c36d' : '#ececec'}
            trackColor={{false: '', true: '#b7edd1'}}
            onValueChange={setSwitchValue}
            value={switchValue}
          />
        </Organizer>
        <Organizer>
          <Text>Novos comentários</Text>
          <Switch
            thumbColor={switchValue2 ? '#11c36d' : '#ececec'}
            trackColor={{false: '', true: '#b7edd1'}}
            onValueChange={setSwitchValue2}
            value={switchValue2}
          />
        </Organizer>
        <Organizer>
          <Text>Novos seguidores</Text>
          <Switch
            thumbColor={switchValue3 ? '#11c36d' : '#ececec'}
            trackColor={{false: '', true: '#b7edd1'}}
            onValueChange={setSwitchValue3}
            value={switchValue3}
          />
        </Organizer>
        <Organizer>
          <Text>Novos pagamentos</Text>
          <Switch
            thumbColor={switchValue ? '#11c36d' : '#ececec'}
            trackColor={{false: '', true: '#b7edd1'}}
            onValueChange={setSwitchValue}
            value={switchValue}
          />
        </Organizer>
        <LastOrganizer>
          <Text>Novidades e promoções</Text>
          <Switch
            thumbColor={switchValue ? '#11c36d' : '#ececec'}
            trackColor={{false: '', true: '#b7edd1'}}
            onValueChange={setSwitchValue}
            value={switchValue}
          />
        </LastOrganizer>
      </Options>
      <Container>
        <SubTitle>Receber notificações via e-mail</SubTitle>
      </Container>
      <Options>
        <LastOrganizer>
          <Text>Novos pagamentos</Text>
          <Switch
            thumbColor={switchValue ? '#11c36d' : '#ececec'}
            trackColor={{false: '', true: '#b7edd1'}}
            onValueChange={setSwitchValue}
            value={switchValue}
          />
        </LastOrganizer>
      </Options>
    </Background>
  );
}
