import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export const Home: FC = () => {
    const auth = useSelector((state: any) => state.auth);
    return <>
        <View className='w-full p-4'>
            <Text>ยินดีต้อนรับ {auth.firstName} {auth.lastName}</Text>
        </View>
    </>
}