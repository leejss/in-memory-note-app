import React, {createContext, useCallback, useContext, useState} from 'react';
import {storeData} from './store';

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
  const [contextNotes, setContextNotes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const notes = await getData('@note');
  //     if (notes) {
  //       setContextNotes(notes);
  //     }
  //   };
  //   console.log('NoteProvider useEffect:');
  //   fetchData();
  // }, []);

  const addNote = useCallback(
    async note => {
      setContextNotes([...contextNotes, note]);
      try {
        await storeData('@notes', [...contextNotes, note]);
      } catch (error) {
        console.error(error);
      }
    },
    [contextNotes],
  );

  const updateNote = useCallback(
    async note => {
      try {
        const noteIndex = contextNotes.findIndex(item => item.id === note.id);
        setContextNotes(prev => {
          prev[noteIndex].title = note.title;
          prev[noteIndex].content = note.content;
          return [...prev];
        });
        await storeData('@notes', contextNotes);
      } catch (error) {
        console.error(error);
      }
    },
    [contextNotes],
  );

  const deleteNote = useCallback(
    async id => {
      try {
        const afterDelete = contextNotes.filter(item => item.id !== id);
        if (afterDelete) {
          setContextNotes(afterDelete);
        } else {
          setContextNotes([]);
        }
        await storeData('@notes', afterDelete);
      } catch (error) {
        console.error(error);
      }
    },
    [contextNotes],
  );

  const getNote = id => {
    const contextNote = contextNotes.find(item => item.id === id);
    return contextNote;
  };

  const value = {
    contextNotes,
    addNote,
    getNote,
    updateNote,
    deleteNote,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export const useNotes = () => {
  const context = useContext(NoteContext);
  return context;
};
