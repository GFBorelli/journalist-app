import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Register from './pages/Register'
import News from './pages/News'
import NewsEdit from './pages/NewsEdit'

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#000' },
                headerTintColor: '#fff',
            }}>
                <Stack.Screen name="Register" component={Register} options={({ route }) => ({ title: 'Cadastro de notícias' })} />
                <Stack.Screen name="News" component={News} options={({ route }) => ({ title: 'Notícias já cadastradas' })} />
                <Stack.Screen name="NewsEdit" component={NewsEdit} options={({ route }) => ({ title: 'Edição de notícias' })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes