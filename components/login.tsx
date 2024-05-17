import { FC } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { MyInput } from './ui/MyInput';

const LoginSchema = z.object({
    userName: z.string().min(3),
    password: z.string().min(5)
    // add more field
});

type LoginModel = z.infer<typeof LoginSchema>;

export const Login: FC = () => {
    // call hooks
    const { control, handleSubmit, reset } = useForm<LoginModel>({
        defaultValues: {
            userName: '',
            password: ''
        },
        resolver: zodResolver(LoginSchema)
    });

    // when reset press
    const whenResetPress = () => {
        reset();
    }

    // when validate pass
    const whenValidatePass: SubmitHandler<LoginModel> = (user) => {
        // your logic when validate pass
        // send data to api server
        console.log(user);
    }
    // when validate fail
    const whenValidateFail: SubmitErrorHandler<LoginModel> = (error) => {
        // your logic when validate fail
        // notify to user
        console.log(error);
    }

    return <>
        <View className='flex flex-col bg-blue-900 md:bg-red-400 w-screen h-full py-16 px-8'>
            <Text
                className='border-dashed border-red-300 border-t-2 border-b-2 text-3xl text-center text-blue-400 underline font-bold tracking-wider uppercase'>Login Page</Text>
            <Text className='rounded-lg border border-green-200 p-2 my-2'>Welcome</Text>

            <MyInput name='userName' control={control} label="ผู้ใช้งาน" />
            <MyInput name='password' control={control} isSecure={true} label='รหัสผ่าน' />

            <View className='flex flex-row space-x-2'>
                <Pressable
                    onPress={handleSubmit(whenValidatePass, whenValidateFail)}
                    className='bg-blue-600 py-2 rounded-md flex-[2]'>
                    <Text className='text-white text-center font-semibold'>เข้าสู่ระบบ</Text>
                </Pressable>

                <Pressable
                    onPress={whenResetPress}
                    className='bg-red-400 py-2 rounded-md flex-1'>
                    <Text className='text-white text-center font-semibold'>ยกเลิก</Text>
                </Pressable>
            </View>

        </View>
    </>

}