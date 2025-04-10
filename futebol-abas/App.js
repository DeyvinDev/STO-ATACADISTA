import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import EscudoScreen from './Screens/EscudoScreen';
import JogadoresScreen from './Screens/JogadoresScreen';
import TitulosScreen from './Screens/TitulosScreens';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          {/* Escudo */}
          <Tab.Screen
            name='EscudoScreen'
            component={EscudoScreen}
            options={{
              title: 'Escudo',
              tabBarIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />
            }}
          />

          {/* Jogadores */}
          <Tab.Screen
            name='JogadoresScreen'
            component={JogadoresScreen}
            options={{
              title: 'Time',
              tabBarIcon: ({ color, size }) => <Ionicons name='people' color={color} size={size} />
            }}
          />


          {/* Títulos */}
          <Tab.Screen
            name='TitulosScreen'
            component={TitulosScreen}
            options={{
              title: 'Títulos',
              tabBarIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />
            }}
            />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
