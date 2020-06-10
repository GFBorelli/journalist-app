import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  align-items: center;
`;

export const List = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
})``;

export const NewsCard = styled.View`
    background: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    width: 350px;
    margin-top: 20px;
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
    width: 140px;
    background: ${props => props.background};
`

export const ButtonsContainer = styled.View`
    justify-content: space-around;
    flex-direction: row;
`