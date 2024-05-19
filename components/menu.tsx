import { FC } from 'react';
import { Text, View, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
interface Props {
    // navigator?: NavigationProp<any, any>
}

export const Menu: FC<Props> = (props) => {
    const navigator = useNavigation<NavigationProp<any, any>>();
    // when menu press
    const whenMenuPress = (screenName: string) => {
        navigator.navigate(screenName)
        // if (props.navigator) {
        //     props.navigator.navigate(screenName);
        // }
    }

    return <>
        <View className='flex flex-row flex-wrap px-2 py-5 gap-y-4'>
            <Pressable
                className='w-1/3 flex flex-col items-center'
                onPress={() => whenMenuPress("Login")}>
                <MaterialIcons name="supervised-user-circle" size={64} color="#B0EBB4" />
                <Text className='font-semibold'>User</Text>
            </Pressable>
            <Pressable
                className='w-1/3 flex flex-col items-center'
                onPress={() => whenMenuPress("Todo")}>
                <MaterialIcons name="today" size={64} color="#E1ACAC" />
                <Text className='font-semibold'>Todo</Text>
            </Pressable>
            <Pressable className='w-1/3 flex flex-col items-center'>
                <MaterialIcons name="camera" size={64} color="#EADFB4" />
                <Text className='font-semibold'>Photo</Text>
            </Pressable>
            <Pressable className='w-1/3 flex flex-col items-center'>
                <MaterialIcons name="photo" size={64} color="#B3C8CF" />
                <Text className='font-semibold'>Album</Text>
            </Pressable>
            <Pressable className='w-1/3 flex flex-col items-center'>
                <MaterialIcons name="comment" size={64} color="#F6995C" />
                <Text className='font-semibold'>Comment</Text>
            </Pressable>
            <Pressable className='w-1/3 flex flex-col items-center'>
                <MaterialIcons name="podcasts" size={64} color="#51829B" />
                <Text className='font-semibold'>Post</Text>
            </Pressable>
        </View>
    </>
}