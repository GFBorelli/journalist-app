import React, { useRef, useState, useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import { useDispatch } from 'react-redux'

import { editNewsRequest } from '../../store/modules/news/actions'

import Background from '../../components/Background'
import { Container, Form, NewsTitle, NewsContent, UserPicker, Button, ButtonText } from './styles';

const newsEdit = ({ route, navigation }) => {

  const contentRef = useRef()

  const [loading, setLoading] = useState(true)
  const [authorList, setAuthorList] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState(route.params.news.selectedAuthor);
  const [title, setTitle] = useState(route.params.news.title)
  const [content, setContent] = useState(route.params.news.content)

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

  function handleEdit(id) {
    dispatch(
      editNewsRequest({
        id,
        selectedAuthor,
        title,
        content
      })
    );

    setSelectedAuthor('default')
    setTitle('')
    setContent('')
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
            <Text style={{ color: '#FFF', paddingLeft: 10 }}>{'Autor'}</Text>
            <UserPicker
              selectedValue={selectedAuthor}
              onValueChange={author => setSelectedAuthor(author)}
            >
              <UserPicker.Item key="default" label="Escolha um autor" value={"default"} />
              {authorList.map((author) => (
                <UserPicker.Item key={author.id} label={author.name} value={author.name} />
              ))}

            </UserPicker>

            <Text style={{ color: '#FFF', paddingLeft: 10 }}>{'Titulo'}</Text>
            <NewsTitle
              placeholder='Título da matéria'
              returnKeyType='next'
              onSubmitEditing={() => contentRef.current.focus()}
              value={title}
              onChangeText={setTitle}
            />

            <Text style={{ color: '#FFF', paddingLeft: 10 }}>{'Conteúdo'}</Text>
            <NewsContent
              placeholder='Conteúdo da matéria'
              multiline={true}
              ref={contentRef}
              value={content}
              onChangeText={setContent}
            />

          </Form>

          <Button onPress={() => handleEdit(route.params.news.id)}>
            <ButtonText>Editar notícia</ButtonText>
          </Button>

          <Button onPress={() => navigation.navigate('News')}>
            <ButtonText>Voltar as notícias</ButtonText>
          </Button>

        </Container>}
    </Background>
  );
}

export default newsEdit;