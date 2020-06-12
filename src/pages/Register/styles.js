import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  align-items: center;

`;

export const Form = styled.View`
    margin: 30px 0px;
    padding: 5px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    width: 350px;
    height: 400px;
`

export const NewsTitle = styled.TextInput.attrs({
    placeholderTextColor: 'rgb(0, 0, 0)'
})`
    background: #fff;
    font-size: 15px;
    margin: 10px;
    color: #000;
    border-radius: 4px;
`
export const NewsContent = styled.TextInput.attrs({
    placeholderTextColor: 'rgb(0, 0, 0)',
    textAlignVertical: 'top'
})`
    background: #fff;
    flex: 10;
    font-size: 15px;
    margin: 10px;
    color: #000;
    border-radius: 4px;
`

export const UserPicker = styled(Picker)`
    background: #fff;
    font-size: 15px;
    margin: 10px;
    color: #000;
    border-radius: 4px;
`

export const Button = styled(RectButton)`
    padding: 15px;
    margin-top: 15px;
    background: rgba(0, 0, 0, 0.5);
    width: 200px;
    align-items: center;
    border-radius: 5px;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`


