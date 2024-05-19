import { FC, useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
export const User: FC = () => {
    // hook
    const [user, setUser] = useState([]);
    // load user
    const loadUser = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (resp.ok) {
                const jsonResp = await resp.json();
                setUser(jsonResp);
            } else {
                Alert.alert("ระบบมีปัญหา", "กรุณาลองอีกครั้ง");
            }
        } catch (e) {
            Alert.alert("ระบบมีปัญหา", "กรุณาลองอีกครั้ง");
        }
    }
    // load data when init
    useEffect(() => {
        loadUser();
    }, []);

    return <>
        <View className='w-screen h-full p-4 '>
            <ScrollView className='space-y-2 flex flex-col'>
                {
                    user.map((user, index) => (
                        <View key={index} className='flex flex-col bg-white rounded-lg p-2'>
                            <Text>{user["name"]}</Text>
                            <Text>{user["username"]}</Text>
                            <Text>{user["email"]}</Text>
                            <Text>{user["address"]["street"]}</Text>
                            <Text>{user["phone"]}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    </>
}