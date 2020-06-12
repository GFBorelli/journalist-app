import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  align-items: center;
  padding-bottom: 50px;
`;

export const SearchContainer = styled.View`
    align-items: center;
    flex-direction: row;
    width: 350px;
    margin: 10px 0px;
`;

export const SearchInput = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
    flex: 1;
    background: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    color: #fff;
    border-radius: 5px;
    margin-right: 2px;
`

export const List = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
})``;

export const NewsCard = styled.View`
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    width: 350px;
    margin-bottom: 30px;
    padding: 10px;
    
`

export const Title = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`

export const Author = styled.Text`
    font-weight: bold;
    color: #fff;
`

export const NewsContent = styled.Text`
    color: #fff;
    font-size: 17px;
`

export const Button = styled(RectButton)`
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 5px;
    height: 50px;
    width: 100px;
    background: ${props => props.background};
`

export const ButtonsContainer = styled.View`
    justify-content: space-around;
    flex-direction: row;
`