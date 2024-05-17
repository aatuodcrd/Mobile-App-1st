import { FC } from 'react';
import { TextInput, Text } from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface Props {
    name: string;
    control: Control<any>;
    isSecure?: boolean;
    label: string;
}

export const MyInput: FC<Props> = (props) => {
    return <>
        <Controller control={props.control} name={props.name} render={({ field, fieldState }) =>
        (
            <>
                <Text className={`${fieldState.invalid ? 'text-red-500' : ''}`}>{props.label}</Text>
                <TextInput
                    secureTextEntry={props.isSecure}
                    onChangeText={field.onChange}
                    value={field.value}
                    className={
                        `p-2 border rounded-lg ${fieldState.invalid ? 'border-red-500 bg-red-200' : 'border-blue-500 bg-white'}`
                    }
                />
                {
                    fieldState.invalid &&
                    <Text className='text-red-500'>{fieldState.error?.message}</Text>
                }
            </>
        )
        }
        />
    </>
}