import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Suggestions, Title, Separator, News, Image, Scroll} from '../styles';

import cupom from '~/assets/cupom.jpeg';
import cupom2 from '~/assets/cupom2.jpeg';
import GenerateOptions from '~/components/generateOptions';
import data from '~/services/server.json';

export default function Store() {
  return (
    <>
      <News>
        <Title style={{marginBottom: 20}}>Destaques</Title>
        <Scroll>
          <TouchableOpacity>
            <Image source={cupom} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={cupom2} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={cupom} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={cupom2} />
          </TouchableOpacity>
        </Scroll>
        <Separator />
      </News>
      <Suggestions>
        <Title>Serviços</Title>
        {data.services.map(item => (
          <GenerateOptions data={item} key={data.id} />
        ))}

        <Separator />
        <Title>Games</Title>
        {data.games.map(item => (
          <GenerateOptions data={item} key={data.id} />
        ))}

        <Separator />
        <Title>Músicas</Title>
        {data.musics.map(item => (
          <GenerateOptions data={item} key={data.id} />
        ))}

        <Separator />
        <Title>TVs</Title>
        {data.tvs.map(item => (
          <GenerateOptions data={item} key={data.id} />
        ))}
        <Separator style={{borderColor: 'white', borderBottomColor: 'white'}} />
      </Suggestions>
    </>
  );
}
