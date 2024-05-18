import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './components/login';
import { Register } from './components/register';
import { Main } from './components/main';
import { ChangePassword } from './components/changePassword';

export default function App() {
  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login"
        options={{ headerShown: false }}
        component={Login} />
      <Stack.Screen name="Register"
        options={{
          title: "ลงทะเบียน", headerStyle: {
            backgroundColor: "#7FFFD4"
          }, headerTitleStyle: {
            color: 'black'
          }
        }}
        component={Register} />

      <Stack.Screen
        name="Main"
        options={{ headerShown: false }}
        component={Main}
      />

      <Stack.Screen name="ChangePassword" component={ChangePassword} />

    </Stack.Navigator>
  </NavigationContainer>
}
