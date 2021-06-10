import {Content, Form, Input, Item, Label, Textarea} from 'native-base';
import React, {useLayoutEffect, useState} from 'react';
import {v4} from 'uuid';
import TextBtn from '../components/buttons/TextBtn';
import Layout from '../components/Layout';
import {useNotes} from '../contexts/NoteContext';

export default function AddScreen({navigation}) {
  const [note, setNote] = useState({id: '', title: '', content: ''});
  const {addNote} = useNotes();

  useLayoutEffect(() => {
    const onSave = () => {
      addNote({
        ...note,
        id: v4(),
      });
      navigation.navigate('Home');
    };
    navigation.setOptions({
      headerRight: () => <TextBtn onPress={onSave} text="Save" />,
    });
  }, [navigation, addNote, note]);

  const onChangeTitle = title => {
    setNote({
      ...note,
      title,
    });
  };

  const onChangeContent = content => {
    setNote({
      ...note,
      content,
    });
  };

  return (
    <Layout>
      <Content>
        <Form>
          <Item>
            <Label>Title:</Label>
            <Input value={note.title} onChangeText={onChangeTitle} />
          </Item>
          <Textarea value={note.content} onChangeText={onChangeContent} />
        </Form>
      </Content>
    </Layout>
  );
}
