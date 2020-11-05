import React from 'react';

import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
        <Category>
            <span>Canais de Texto</span>
            <AddCategoryIcon />
        </Category>

          <ChannelButton channelName="Tibia Hunt" />
          <ChannelButton channelName="Cat Lovers" />
          <ChannelButton channelName="Friends Addicted" />
          <ChannelButton channelName="Lolzinho" />
          <ChannelButton channelName="Fall Guys" />
          <ChannelButton channelName="Dev Challenge" />
    </Container>
  );
};
export default ChannelList;