import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "../screens/event-detail";
import { navOptions } from "./options";
import { useNavigation } from "expo-router";
import ProfileDetailScreen from "../screens/profiles/profile-detail-screen";
import ProfileScreen from "../screens/profiles/profiles-screen";
import { HomeTabs } from './tabs'

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Event" component={EventScreen} />
    </Stack.Navigator>
  );
};
export const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
      <Stack.Screen name="Profiles" component={ProfileScreen} />
      <Stack.Screen name="Profile" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
};
