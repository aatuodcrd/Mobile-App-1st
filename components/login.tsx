import { FC } from 'react';
import { View, Text, Pressable, Alert, Image } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { NavigationProp } from '@react-navigation/native';
import { MyInput } from './ui/MyInput';
import { MyButton } from './ui/MyButton';

interface Props {
    navigation: NavigationProp<any, any>
}

const LoginSchema = z.object({
    userName: z.string().min(3),
    password: z.string().min(5)
    // add more field
});

type LoginModel = z.infer<typeof LoginSchema>;

export const Login: FC<Props> = (props) => {
    // call hooks
    const { control, handleSubmit, reset } = useForm<LoginModel>({
        defaultValues: {
            userName: '',
            password: ''
        },
        resolver: zodResolver(LoginSchema)
    });

    // when navigate to register screen
    const whenNavigate = () => {
        props.navigation.navigate("Register");
    }

    // when reset press
    const whenResetPress = () => {
        reset();
    }

    // when validate pass
    const whenValidatePass: SubmitHandler<LoginModel> = async (user) => {
        // your logic when validate pass
        // send data to api server
        console.log(user);
        try {
            const resp = await fetch("http://52.221.215.212/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: user.userName,
                    password: user.password
                })
            });
            const jsonResp = await resp.json();
            if (jsonResp.success) {
                // user / pasword correct
                props.navigation.navigate("Main");
            } else {
                // invalid user or password
                // warning 
                Alert.alert("แจ้งเตือน", "ชื่อหรือรหัสผ่านไม่ถูกต้อง");
            }
        } catch (e) {
            Alert.alert("ระบบขัดข้อง", "กรุณาลองอีกครั้งหรือแจ้งทีม support !");
        }
    }
    // when validate fail
    const whenValidateFail: SubmitErrorHandler<LoginModel> = (error) => {
        // your logic when validate fail
        // notify to user
        console.log(error);
        Alert.alert("แจ้งเตือน", "กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง");
    }

    return <>
        <View className='space-y-4 flex flex-col md:bg-red-500 w-screen h-full py-16'>
            <View className='flex flex-row justify-center'>
                <Image source={require('./../assets/logo.jpeg')} style={{ width: 100, height: 100 }} className='rounded-full' />
            </View>
            <Text className='border-dashed border-red-600 border-t-2 border-b-2 text-3xl text-center text-blue-500 underline font-bold tracking-wider uppercase'>Login Page</Text>
            <Text className='rounded-lg border border-blue-500 p-2 my-2'>Welcome</Text>
            <View>
                <MyInput name='userName' control={control} label="ผู้ใช้งาน" />
            </View>
            <View>
                <MyInput name='password' control={control} isSecure={true} label='รหัสผ่าน' />
            </View>
            <View className='flex flex-row space-x-2'>
                <View className='flex-1'>
                    <MyButton label='เข้าสู่ระบบ' whenPress={handleSubmit(whenValidatePass, whenValidateFail)} />
                </View>
                <View className='flex-1'>
                    <MyButton label='ยกเลิก' whenPress={whenResetPress} />
                </View>
            </View>
            <View className='flex flex-row justify-center'>
                <Pressable onPress={whenNavigate}>
                    <Text className='text-blue-800 underline text-lg'>Register new user</Text>
                </Pressable>
            </View>
        </View>
    </>

}