import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { removeNews } from '../../store/modules/news/actions'

import Background from '../../components/Background'
import { Container, List, NewsCard, Title, Author, NewsContent, ButtonsContainer, Button } from './styles';


const News = ({ navigation }) => {
  const news = useSelector(state => state.news.news)

  const dispatch = useDispatch()

  function handleEdit(news) {
    navigation.navigate('NewsEdit', { news })

  }

  function handleDelete(id) {
    dispatch(
      removeNews({
        id
      })
    );
  }

  return (
    <Background>
      <Container>
        <List
          data={news}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NewsCard>
              <Title>{item.title}</Title>
              <NewsContent>{item.content}</NewsContent>
              <Author>Por: {item.selectedAuthor}</Author>
              <ButtonsContainer>
                <Button background={'#FFC107'} onPress={() => handleEdit(item)}>
                  <Icon name="edit" size={40} color="#fff" />
                </Button>

                <Button background={'#DC3545'} onPress={() => handleDelete(item.id)}>
                  <Icon name="clear" size={40} color="#fff" />
                </Button>
              </ButtonsContainer>
            </NewsCard>
          )}
        />
      </Container>
    </Background>
  );
}

export default News;