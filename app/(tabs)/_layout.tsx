import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';


// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout () {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: '#8e8e93',
        tabBarInactiveTintColor: '#8e8e93',
      }}>
        <Tabs.Screen 
      name="index" 
      options={{ 
        title: 'Home', 
        tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />) 
        }} />
      <Tabs.Screen 
      name="calendar" 
      options={{ 
        title: 'Calendar', 
        tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'calendar' : 'calendar-outline'} color={color} size={24} />)
        }} />
    </Tabs >
  );
}
