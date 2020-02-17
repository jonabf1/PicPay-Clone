import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {
  Card,
  Profile,
  Image,
  Details,
  DescriptionActivity,
  FooterActivity,
  Value,
  TimeText,
  Organizer,
  MessageText,
  LikeText,
  Separator,
} from './styles';

import color from '~/styles/colors';
import shadow from '~/styles/shadow';

export default function ActivityRender({data}) {
  return (
    <>
      <Card style={shadow}>
        <Profile>
          <Image source={{uri: data.photo_owner}} />
          <Details>
            <DescriptionActivity
              style={{fontWeight: 'bold', color: color.text, marginRight: 5}}>
              {data.owner}
            </DescriptionActivity>
            <DescriptionActivity>{data.activity}</DescriptionActivity>
            <DescriptionActivity
              style={{fontWeight: 'bold', color: color.text, marginLeft: 5}}>
              {data.recipient}
            </DescriptionActivity>
          </Details>
        </Profile>
        <DescriptionActivity>{data.description}</DescriptionActivity>
        <FooterActivity>
          <Organizer>
            <Value style={{color: data.color}}>{data.value}</Value>
            <Separator />
            <Icon
              name="account-supervisor"
              size={26}
              color={color.inativeIcon}
            />
            <TimeText>{data.timestamp}</TimeText>
          </Organizer>
          <Organizer>
            <Icon name="message-outline" size={26} color={color.inativeIcon} />
            <MessageText>{data.comments.length}</MessageText>
            <Icon2
              style={{marginLeft: 15}}
              name="favorite-border"
              size={26}
              color={color.inativeIcon}
            />
            <LikeText>{data.likes}</LikeText>
          </Organizer>
        </FooterActivity>
      </Card>
    </>
  );
}
