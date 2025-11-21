import { Image } from 'expo-image';
import {View, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <View style = {styles.wrapper}></View>
  );
}

const styles = StyleSheet.create({
wrapper: {
  width: 100,
  height: 100,
  backgroundColor: 'red',
}
});
