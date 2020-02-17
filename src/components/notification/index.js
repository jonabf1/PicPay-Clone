import React from 'react';
import {Container, Card, Description, Code, CreatedAt} from './styles';

export default function NotificationRender({data}) {
  return (
    <Card>
      <Container>
        <Description>
          {data.description}
          <Code>{data.code}</Code>
          <Description>{data.continuation}</Description>
        </Description>
      </Container>
      <CreatedAt>{data.created_at}</CreatedAt>
    </Card>
  );
}
