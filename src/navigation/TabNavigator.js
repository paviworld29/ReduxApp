import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import CustomTabBar from './CustomTabBar';


const Tab = createBottomTabNavigator();

const TabNavigator = ({}) => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    tabBar={(props)=><CustomTabBar {...props}/>}
     >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
