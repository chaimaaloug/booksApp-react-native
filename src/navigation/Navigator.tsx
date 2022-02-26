import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Routes} from './Routes'
import {BooksListScreen} from '../screens/BooksListScreen'
import {LaunchScreen} from '../screens/LaunhScreen'
import { BooksDetailScreen } from '../screens/BooksDetailScreen';
import { Terms } from '../screens/Terms';


type Props = {}
const Stack = createNativeStackNavigator();
export const Navigator = (props: Props) => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={Routes.LAUNCH} component={LaunchScreen} />
            <Stack.Screen name={Routes.TERMS_SCREEN} component={Terms} />
            <Stack.Screen name={Routes.BOOKS_LIST_SCREEN} component={BooksListScreen} />
            <Stack.Screen name={Routes.BOOK_DETAIL_SCREEN} component={BooksDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
