import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeoplePage from './src/pages/PeoplePage';
import PersonDetailPage from './src/pages/PersonDetailPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: 'Pessoas!',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={PeoplePage}
        />
        <Stack.Screen
          name="PersonDetail"
          component={PersonDetailPage}
          options={({ route }) => ({
            title: `${route.params.person.name.first} ${route.params.person.name.last}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
