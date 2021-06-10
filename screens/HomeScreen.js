import React from 'react';
import {FlatList} from 'react-native';
import FooterBtn from '../components/FooterBtn';
import Layout from '../components/Layout';
import NoteContent from '../components/NoteContent';
import {useNotes} from '../contexts/NoteContext';

export default function HomeScreen({navigation}) {
  const {contextNotes} = useNotes();
  return (
    <Layout
      footer={
        <FooterBtn onPress={() => navigation.navigate('Add')} text="Add Note" />
      }>
      <FlatList
        data={contextNotes && contextNotes}
        renderItem={({item}) => (
          <NoteContent
            note={item}
            onPress={() => navigation.navigate('Mod', {id: item.id})}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
}
