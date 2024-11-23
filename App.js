import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './home';
import List from './List';
import shopping from './shopping';
import movie from './movie';
import Myntra from './myntra';
import screen from './screen';
import camera from './camera';
import calender from './calender';
import maps from './maps';
import orderlist from './orderlist';
import methods from './methods';
import option from './option';
import newcart from './newcart';
import ScoreBoard from './ScoreBoard';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ScoreBoard' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="shopping" component={shopping}/>
        <Stack.Screen name="movie" component={movie}/>
        <Stack.Screen name="myntra" component={Myntra}/>
        <Stack.Screen name="screen" component={screen}/>
        <Stack.Screen name='calender' component={calender}/>
        <Stack.Screen name='maps' component={maps}/>
        <Stack.Screen name='orderlist' component={orderlist}/>
        <Stack.Screen name='methods' component={methods}/>
      <Stack.Screen name='option' component ={option}/>
      <Stack.Screen name='camera'component={camera}/>
      <Stack.Screen name='newcart' component={newcart}/>
      <Stack.Screen name='ScoreBoard' component={ScoreBoard}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App