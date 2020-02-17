import React from 'react';
import {Option, Image, OptionText} from './styles';

export default function SuggestionRender({data, color}) {
  return (
    <Option onPress={() => {}}>
      <Image source={{uri: data.photo}} />
      <OptionText style={{color: color || '#fff'}}>{data.title}</OptionText>
    </Option>
  );
}
