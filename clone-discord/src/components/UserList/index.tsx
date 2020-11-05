import React from 'react';

import { Container, Role, User, Avatar} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot} ) => {
    return (
        <User>
           <Avatar className={isBot ? 'bot' : ''}/>
           <strong>{nickname}</strong>
           {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => {
  return (
      <Container>
          <Role>Disponível - 4</Role>
          <UserRow nickname="Sol Dionéia" />
          <UserRow nickname="Pedro Orlando" />
          <UserRow nickname="Hudson Ferraz" />
          <UserRow nickname="Sarah Orlando" />

          <Role>Offline - 18</Role>
          <UserRow nickname="Aurora Starkk Oliveira" isBot/>          
          <UserRow nickname="Taylor Alison Swift" />
          <UserRow nickname="Michael Gary Scott" />
          <UserRow nickname="Demetria Devonne Lovato" />
          <UserRow nickname="Katy Perry" />
          <UserRow nickname="Chanandler Bong" />
          <UserRow nickname="Rachel Green" />
          <UserRow nickname="Hermione" />
          <UserRow nickname="Gal Gadot" />
          <UserRow nickname="Lindsay Lohan" />
          <UserRow nickname="Bruna Marquezine" />
          <UserRow nickname="Mia Wallace" />
          <UserRow nickname="Winona Rider" />
          <UserRow nickname="Julia Roberts" />
          <UserRow nickname="Joey Tribbiani" />
      </Container>
  )
}

export default UserList;