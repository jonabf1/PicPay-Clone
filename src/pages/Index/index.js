import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Balance,
  Header,
  Suggestions,
  Text,
  Button,
  Value,
  SuggestionText,
  ListSuggestions,
  OptionsFilter,
  TextActivity,
  HeaderActivity,
  Activity,
} from './styles';
import color from '~/styles/colors';
import Background from '~/components/background';
import data from '~/services/server.json';
import ActivityRender from '~/components/activity';
import SuggestionRender from '~/components/suggestions';

export default function Index({navigation}) {
  const [decideFilter, setDecideFilter] = useState(false);

  return (
    <Background>
      <Header>
        <Button onPress={() => {}}>
          <Icon name="qrcode-scan" size={26} color={color.primary} />
        </Button>
        <Balance>
          <Text>Meu saldo</Text>
          <Value>R$ 95,34</Value>
        </Balance>
        <Button onPress={() => navigation.navigate('Share')}>
          <Icon name="account-plus-outline" size={26} color={color.primary} />
        </Button>
      </Header>
      <Suggestions>
        <SuggestionText>Sugestões para Você</SuggestionText>
        <ListSuggestions
          data={data.methods_payment}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SuggestionRender data={item} />}
        />
      </Suggestions>
      <Activity>
        <HeaderActivity>
          <TextActivity>Atividades</TextActivity>
          <OptionsFilter>
            <TouchableOpacity onPress={() => setDecideFilter(!decideFilter)}>
              <TextActivity
                style={
                  !decideFilter && {
                    color: color.primary,
                    borderBottomColor: color.primary,
                    borderBottomWidth: 4,
                  }
                }>
                Todas
              </TextActivity>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDecideFilter(!decideFilter)}>
              <TextActivity
                style={[
                  [
                    decideFilter && {
                      color: color.primary,
                      borderBottomColor: color.primary,
                      borderBottomWidth: 4,
                    },
                  ],
                  {marginLeft: 20},
                ]}>
                Minhas
              </TextActivity>
            </TouchableOpacity>
          </OptionsFilter>
        </HeaderActivity>
        {(!decideFilter ? data.others_activity : data.my_activity).map(item => (
          <ActivityRender key={item.id} data={item} />
        ))}
      </Activity>
    </Background>
  );
}

Index.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({tintColor}) => (
    <Icon name="home-variant" size={26} color={tintColor} />
  ),
};
