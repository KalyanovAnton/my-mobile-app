import  Button  from '../../components/Button';
import ScrollTop from '../../components/ScrollTop'
import {View, StyleSheet } from 'react-native';
import CoffeeList from '../../components/CoffeeList'


export default function HomeScreen() {
  return (
    <>
      <View style = {styles.wrapper}></View>
      <Button text = {'home'}></Button>
      <ScrollTop></ScrollTop>
      <CoffeeList />
    </>
  );
}

const styles = StyleSheet.create({
wrapper: {
  width: "90%",
  height: 200,
  backgroundColor: 'red',
},
});
