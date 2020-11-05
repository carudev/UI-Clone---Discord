import React, { useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { 
    Container, 
    Messages, 
    InputWrapper, 
    Input, 
    InputIcon 
 } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        author="Carol Oliveira"
                        date="04/11/2020"
                        content="#JustiçaPorMariFerrer"
                    />                    
                ))};

                <ChannelMessage 
                    author="Carol Oliveira"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />

                <ChannelMessage 
                    author="Sarah Orlando"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />

                <ChannelMessage 
                    author="Pedro Orlando"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />
                
                <ChannelMessage 
                    author="Sol Dionéia"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />

                <ChannelMessage 
                    author="Hudson Ferraz"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />

                <ChannelMessage 
                    author="Carol Oliveira"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />

                <ChannelMessage 
                    author="Carol Oliveira"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />

                <ChannelMessage 
                    author="Carol Oliveira"
                    date="04/11/2020"
                    content="#JustiçaPorMariFerrer"
                />


                <ChannelMessage 
                    author="Aurora"
                    date="04/11/2020"
                    content={
                        <>
                        <Mention>@Carol Oliveira</Mention>, não iremos nos calar! #JustiçaPorMariFerrer!
                        </>
                    }
                    hasMention
                    isBot
                /> 


          </Messages>

        <InputWrapper>
            <Input type="text" placeholder="conversar em #chat-livre"/>
            <InputIcon />
        </InputWrapper>

      </Container>
  );
};

export default ChannelData;