import React from 'react';
import { useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '../../components/Background'
import { Container, List, NewsCard, Title, Author, NewsContent, ButtonsContainer, Button } from './styles';


const News = () => {
  const news = useSelector(state => state.news.news)

  return (
    <Background>
      <Container>
        <List
          data={news}
          keyExtractor={item => news[item]}
          renderItem={({ item }) => (
            <NewsCard>
              <Title>{item.title}</Title>
              <Author>Por: {item.selectedAuthor}</Author>
              <NewsContent>{item.content}</NewsContent>
              <ButtonsContainer>
                <Button background={'#FFC107'}>
                  <Icon name="edit" size={40} color="#fff" />
                </Button>

                <Button background={'#DC3545'}>
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