import {Content, Form, Input, Item, Label, Textarea} from 'native-base';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Layout from '../components/Layout';
import {useNotes} from '../contexts/NoteContext';
import TextBtn from '../components/buttons/TextBtn';
import ButtonGroup from '../components/ButtonGroup';

export default function ModScreen({navigation, route}) {
  const id = route.params.id;
  const [note, setNote] = useState({id: id, title: '', content: ''});
  const {getNote, updateNote, deleteNote} = useNotes();

  useLayoutEffect(() => {
    const onUpdate = () => {
      updateNote(note);
      navigation.navigate('Home');
    };
    const onDelete = () => {
      deleteNote(note.id);
      navigation.navigate('Home');
    };
    navigation.setOptions({
      headerRight: () => (
        <ButtonGroup>
          <TextBtn onPress={onUpdate} text="Update" />
          <TextBtn onPress={onDelete} text="Delete" />
        </ButtonGroup>
      ),
    });
  }, [navigation, updateNote, deleteNote, note]);

  useEffect(() => {
    const contextNote = getNote(id);
    if (contextNote) {
      setNote(contextNote);
    }
  }, [id, getNote]);

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
            <Input
              value={note.title && note.title}
              onChangeText={onChangeTitle}
            />
          </Item>
          <Textarea
            value={note.content && note.content}
            onChangeText={onChangeContent}
          />
        </Form>
      </Content>
    </Layout>
  );
}
