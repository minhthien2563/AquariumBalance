import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Send} from 'react-native-gifted-chat';

const Chat_Tab = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <GiftedChat
      alwaysShowSend
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderSend={props => (
        <Send
          {...props}
          containerStyle={{
            height: 50,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Gửi</Text>
        </Send>
      )}
    />
  );
};

export default Chat_Tab;

const styles = StyleSheet.create({});
