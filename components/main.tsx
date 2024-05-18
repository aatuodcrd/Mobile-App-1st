import { FC } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Home } from './home';
import { Menu } from './menu';
import { Message } from './message';
import { Setting } from './setting';

const Tab = createBottomTabNavigator();

export const Main: FC = () => {
    return <>
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='home' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Menu'
                component={Menu}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='menu' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Message'
                component={Message}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='message' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Setting'
                component={Setting}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='settings' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    </>
}