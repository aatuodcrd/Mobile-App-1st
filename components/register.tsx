import { FC } from 'react';
import { View, Alert } from 'react-native';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MyInput } from './ui/MyInput';
import { MyButton } from './ui/MyButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
/*
const postValidate = [
    body('userName').notEmpty().isString().isLength({ min: 5, max: 150 }),
    body('firstName').notEmpty().isString().isLength({ max: 150 }),
    body('lastName').notEmpty().isString().isLength({ max: 150 }),
    body('password').notEmpty().isString().isLength({ min: 8, max: 25 }),
    inputValidate
];
*/
const RegisterSchema = z.object({
    userName: z.string().min(8).max(150),
    firstName: z.string().max(150),
    lastName: z.string().max(150),
    password: z.string().min(8).max(25),
});
type RegisterModel = z.infer<typeof RegisterSchema>;

export const Register: FC = () => {
    // hooks
    const { control, handleSubmit, reset } = useForm<RegisterModel>({
        resolver: zodResolver(RegisterSchema)
    });
    const navigation = useNavigation<NavigationProp<any, any>>();

    // validate pass
    const whenValidatePass: SubmitHandler<RegisterModel> = async (reg) => {
        // send data to server
        try {
            const resp = await fetch("http://52.221.215.212/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: reg.userName,
                    firstName: reg.firstName,
                    lastName: reg.lastName,
                    password: reg.password
                })
            });
            const jsonResp = await resp.json();
            if (jsonResp.success) {
                // go back to login page
                Alert.alert(
                    "สำเร็จ",
                    "ลงทะเบียนสำเร็จ",
                    [{
                        text: "รับทราบ",
                        onPress: () => {
                            reset();
                            navigation.goBack();
                        }
                    }]
                );
            } else {
                Alert.alert("ระบบขัดข้อง", "กรุณาลองอีกครั้งหรือแจ้งทีม support !");
            }
        } catch (e) {
            Alert.alert("ระบบขัดข้อง", "กรุณาลองอีกครั้งหรือแจ้งทีม support !");
        }
    }

    const whenReset = () => {
        reset();
    }
    return <>
        <View className='flex flex-col p-4 space-y-4'>
            <View>
                <MyInput label='รหัสผู้ใช้งาน' name="userName" control={control} />
            </View>
            <View>
                <MyInput label='ชื่ีอ' name="firstName" control={control} />
            </View>
            <View>
                <MyInput label='นามสกุล' name="lastName" control={control} />
            </View>
            <View>
                <MyInput label='รหัสผ่าน' name="password" control={control} isSecure={true} />
            </View>
            <View className='flex flex-row w-full space-x-1'>
                <View className='flex-1'>
                    <MyButton label='ลงทะเบียน' whenPress={handleSubmit(whenValidatePass)} />
                </View>
                <View className='flex-1'>
                    <MyButton label='ยกเลิก' whenPress={whenReset} />
                </View>
            </View>
        </View>
    </>
}