import {Text} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function SaveBtn({onPress, text}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginRight: 10,
    padding: 5,
  },
});
