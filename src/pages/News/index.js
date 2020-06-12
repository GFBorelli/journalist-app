import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { removeNews } from '../../store/modules/news/actions'

import Background from '../../components/Background'
import { Container, SearchContainer, SearchInput, List, NewsCard, Title, Author, NewsContent, ButtonsContainer, Button } from './styles';


const News = ({ navigation }) => {
  const news = useSelector(state => state.news.news)

  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  function handleSearch(news) {
    return news.content.toLowerCase().includes(search.toLowerCase())
  }

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
        <SearchContainer>
          <SearchInput
            placeholder='Digite o conteúdo de busca'
            value={search}
            onChangeText={setSearch}
          />
          <Icon.Button
            name="search"
            size={32}
            backgroundColor='#888'
            iconStyle={{ marginRight: 0 }}
            onPress={() => handleSearch(search)}
          />
        </SearchContainer>

        <List
          data={news.filter(handleSearch)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NewsCard>
              <Title>{item.title}</Title>
              <NewsContent>{item.content}</NewsContent>
              <Author>Por: {item.selectedAuthor}</Author>
              <ButtonsContainer>
                <Button background={'rgba(255, 193, 7, 0.6)'} onPress={() => handleEdit(item)}>
                  <Icon name="edit" size={40} color="#fff" />
                </Button>

                <Button background={'rgba(220, 53, 69, 0.6)'} onPress={() => handleDelete(item.id)}>
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