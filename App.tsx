import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import CompletedTasksScreen from './src/screens/CompletedTasksScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import { TaskProvider } from './src/contexts/TaskContext';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function WikiStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#FF3333',
        headerTitleStyle: { color: '#FF3333', fontWeight: '700' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} options={{ title: 'Artigo' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Wiki"
          screenOptions={{
            drawerStyle: { backgroundColor: '#000' },
            drawerActiveTintColor: '#FF3333',
            drawerInactiveTintColor: '#FFCCCC',
            drawerActiveBackgroundColor: '#220000',
            drawerLabelStyle: { fontWeight: '700' },
          }}
        >
          <Drawer.Screen
            name="Wiki"
            component={WikiStack}
            options={{ drawerIcon: ({ color, size }) => <MaterialIcons name="library-books" size={size} color={color} /> }}
          />
          <Drawer.Screen
            name="Favoritos"
            component={CompletedTasksScreen}
            options={{ drawerIcon: ({ color, size }) => <MaterialIcons name="favorite" size={size} color={color} /> }}
          />
          <Drawer.Screen
            name="Sobre"
            component={SettingsScreen}
            options={{ drawerIcon: ({ color, size }) => <MaterialIcons name="info" size={size} color={color} /> }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
