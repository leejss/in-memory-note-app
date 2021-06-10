import {Container, Footer, FooterTab} from 'native-base';
import React from 'react';

export default function Layout({children, footer}) {
  return (
    <Container>
      {children}
      <Footer>
        <FooterTab>{footer}</FooterTab>
      </Footer>
    </Container>
  );
}
