import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [cnt,setCnt] = useState(1);
  // this is a comment
  // function support when add butt press
  // add number to text
  const whenAddPress = () => {
    // if press + 1 to cnt
    setCnt(cnt + 1);
  }

  return (

    <View style={styles.container}>
      <Text>Close it now! {cnt}</Text>
      <Button title="Add" onPress={whenAddPress}></Button>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
