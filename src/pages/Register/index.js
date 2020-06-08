import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'

import Background from '../../components/Background'
import { Container, Form, NewsTitle, NewsContent, UserPicker, Button, ButtonText } from './styles';

const register = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [authorList, setAuthorList] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setAuthorList(json)
        setLoading(false)
      })
  }, [])

  return (
    <Background>
      {loading ?
        <Container style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator color='#FFF' size={80} />
        </Container>
        :
        <Container>

          <Form>
            <UserPicker
              selectedValue={selectedAuthor}
              onValueChange={(author) => setSelectedAuthor(author)}
            >
              <UserPicker.Item key="default" label="Escolha um autor" value="default" />
              {authorList.map((author) => (
                <UserPicker.Item key={author.id} label={author.name} value={author.name} />
              ))}

            </UserPicker>

            <NewsTitle
              autoCorrect={false}
              autoCaptalize='none'
              placeholder='Título da matéria'
              returnKeyType='next'
            />
            <NewsContent
              autoCorrect={false}
              autoCaptalize='none'
              placeholder='Conteúdo da matéria'
              returnKeyType='next'
              multiline={true}
            />
          </Form>

          <Button onPress={() => { }}>
            <ButtonText>Publicar notícia</ButtonText>
          </Button>

          <Button onPress={() => navigation.navigate('News')}>
            <ButtonText>Ir para notícias</ButtonText>
          </Button>

        </Container>}
    </Background>
  );
}

export default register;