import React from 'react';

import Background from '../../components/Background'
import { Container, Button, Text } from './styles';

const register = ({ navigation }) => {

  return (
    <Background>
      <Container>

        <Button onPress={() => navigation.navigate('News')}>
          <Text>Ir para notícias</Text>
        </Button>

        <Text>Pagina cadastro de notícias</Text>

      </Container>
    </Background>
  );
}

export default register;