import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '~/services/server.json';

import {List, Background, Preview, TextPreview} from './styles';
import Header from '~/components/Header/index';
import NotificationRender from '~/components/notification';

export default function Notification() {
  return (
    <Background>
      <Header
        styleHeader={{justifyContent: 'space-between'}}
        title="Notificações"
        TextRight="Configurar"
        navRight="NotificationConfig"
      />
      <List
        data={data.notifications}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <NotificationRender data={item} />}
      />
    </Background>
  );
}

Notification.navigationOptions = {
  tabBarLabel: 'Notificações',
  tabBarIcon: ({tintColor}) => (
    <>
      <Icon name="bell-outline" size={26} color={tintColor} />
      {data.notifications.length !== 0 && (
        <Preview>
          <TextPreview>{data.notifications.length}</TextPreview>
        </Preview>
      )}
    </>
  ),
};
