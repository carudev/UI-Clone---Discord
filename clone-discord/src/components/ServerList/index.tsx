import React from 'react';

import ServerButton from '../ServerButton';

import { 
    Container,
    Separator
 } from './styles';


const ServerList: React.FC = () => {
  return (
      <Container>
        <ServerButton isHome/>

        <Separator />

        <ServerButton mentions={8}/>
        <ServerButton hasNotifications/>
        <ServerButton />
        <ServerButton  mentions={3}/>
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={6}/>
        <ServerButton />
        <ServerButton mentions={2}/>
        <ServerButton hasNotifications/>
        <ServerButton />
        <ServerButton mentions={5}/>
        <ServerButton />
        <ServerButton />
        <ServerButton />

      </Container>
  )
};

export default ServerList;