import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import place from '~/assets/place.png';
import {
  ButtonOption,
  Image,
  TitleButton,
  DescriptionButton,
  Content,
  Box,
  Distance,
  Point,
} from './styles';

export default function GenerateOptions({data}) {
  return (
    <>
      <ButtonOption>
        {data.store_image ? (
          <Image source={{uri: data.store_image}} />
        ) : (
          <Image source={data.photo ? {uri: data.photo} : place} />
        )}
        <Content>
          <Box>
            <TitleButton>{data.account || data.name}</TitleButton>
            {data.store_image && (
              <>
                <Icon name="shopping" size={18} color="#939395" />
              </>
            )}

            {data.address && (
              <>
                <Icon name="map-marker" size={18} color="#939395" />
                <Point />
                <Distance>{data.distance}</Distance>
              </>
            )}
          </Box>
          {data.account && <DescriptionButton>{data.name}</DescriptionButton>}
          {data.address && (
            <DescriptionButton>{data.address}</DescriptionButton>
          )}
          {data.store_image && (
            <DescriptionButton>{data.description}</DescriptionButton>
          )}
        </Content>
      </ButtonOption>
    </>
  );
}
