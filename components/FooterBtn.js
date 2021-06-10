import {Button, Text} from 'native-base';
import React from 'react';

const FooterBtn = ({onPress, text}) => {
  return (
    <Button full onPress={onPress}>
      <Text>{text}</Text>
    </Button>
  );
};

export default FooterBtn;
