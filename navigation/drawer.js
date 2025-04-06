import HomeScreen from '@/screens/home-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeStack, ProfileStack} from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title:"Home"
    }}/>
    <Drawer.Screen name="ProfilesStack" component={ProfileStack} options={{
        title:"Profile"
    }}/>
    
    </Drawer.Navigator>
  );
} 