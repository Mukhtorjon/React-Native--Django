import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventScreen from '../screens/event-detail';
import EventList from '@/components/events/event_list';
import { navOptions } from  './options'
import { useNavigation } from 'expo-router';
import ProfileDetailScreen from '../screens/profiles/profile-detail-screen';
import ProfileScreen from '../screens/profiles/profiles-screen';

const Stack = createStackNavigator();

export const HomeStack = () =>{
    const navigation = useNavigation()
    return(
        <Stack.Navigator screenOptions={() =>navOptions(navigation)}>
            
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Event" component={EventScreen}/>
        </Stack.Navigator>
    )
    
};
export const ProfileStack = ()=>{
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={() => navOptions(navigation)}>
            <Stack.Screen name='Profiles' component={ProfileScreen}/>
            <Stack.Screen name='Profile' component={ProfileDetailScreen}/>
            
        </Stack.Navigator>
    )
}
