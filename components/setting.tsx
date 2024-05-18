import { FC } from 'react';
import { View, Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any, any>
}

export const Setting: FC<Props> = (props) => {
    // when logout
    const whenLogout = () => {
        props.navigation.navigate("Login");
    }

    // when goto ChangePassword Screen
    const whenChangePassword = () => {
        props.navigation.navigate("ChangePassword");
    }

    return <>
        <View className='flex flex-col p-4 space-y-2'>
            <View className='border rounded-lg h-10 w-full bg-white p-2'>
                <Pressable className='flex flex-row' onPress={whenChangePassword}>
                    <Text className='flex-1'>Change Password</Text>
                    <MaterialIcons name='navigate-next' size={24} />
                </Pressable>
            </View>
            <View className='border rounded-lg h-10 w-full bg-white p-2'>
                <Pressable className='flex flex-row'>
                    <Text className='flex-1'>User Info</Text>
                    <MaterialIcons name='navigate-next' size={24} />
                </Pressable>
            </View>
            <View className='rounded-lg h-10 w-full bg-red-600 p-2'>
                <Pressable className='flex flex-row' onPress={whenLogout}>
                    <Text className='flex-1 text-center text-white font-bold'>Logout</Text>
                </Pressable>
            </View>
        </View>
    </>
}