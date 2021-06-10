import {Body, Card, CardItem, H3, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function NoteContent({note, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardItem>
          <Body>
            <H3>{note && note.title}</H3>
            <Text>{note && note.content}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}
