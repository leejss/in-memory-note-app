import {View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

export default function ButtonGroup({children}) {
  return <View style={styles.group}>{children}</View>;
}

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
  },
});
