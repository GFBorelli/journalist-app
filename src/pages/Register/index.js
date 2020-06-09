import React, { useRef, useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'

import { updateNewsRequest } from '../../store/modules/news/actions'

import Background from '../../components/Background'
import { Container, Form, NewsTitle, NewsContent, UserPicker, Button, ButtonText } from './styles';

const register = ({ navigation }) => {

  const contentRef = useRef()

  const [loading, setLoading] = useState(true)
  const [authorList, setAuthorList] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadAuthorList() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setAuthorList(json)
          setLoading(false)
        })
    }

    loadAuthorList()
  }, [])

  function handleSubmit() {
    dispatch(
      updateNewsRequest({
        selectedAuthor,
        title,
        content
      })
    );
  }

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
              onValueChange={author => setSelectedAuthor(author)}
            >
              <UserPicker.Item key="default" label="Escolha um autor" value="default" />
              {authorList.map((author) => (
                <UserPicker.Item key={author.id} label={author.name} value={author.name} />
              ))}

            </UserPicker>

            <NewsTitle
              placeholder='Título da matéria'
              returnKeyType='next'
              onSubmitEditing={() => contentRef.current.focus()}
              value={title}
              onChangeText={setTitle}
            />

            <NewsContent
              placeholder='Conteúdo da matéria'
              multiline={true}
              ref={contentRef}
              value={content}
              onChangeText={setContent}
            />

          </Form>

          <Button onPress={handleSubmit}>
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