import React from 'react';
import {ListSuggestions, Suggestions, Title, Separator} from '../styles';

import SuggestionRender from '~/components/suggestions';
import GenerateOptions from '~/components/generateOptions';
import data from '~/services/server.json';

export default function Principal() {
  return (
    <Suggestions>
      <Title>Sugestões para Você</Title>
      <ListSuggestions
        data={data.methods_payment}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SuggestionRender color="#363d4f" data={item} />
        )}
      />

      <Separator />
      <Title>Próximos de Você</Title>
      {data.places.map(item => (
        <GenerateOptions data={item} key={data.id} />
      ))}

      <Separator />
      <Title>Contatos</Title>
      {data.friends.map(item => (
        <GenerateOptions data={item} key={data.id} />
      ))}
      <Separator style={{borderColor: 'white', borderBottomColor: 'white'}} />
    </Suggestions>
  );
}
