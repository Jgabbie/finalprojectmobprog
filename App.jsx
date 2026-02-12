import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ResetPassword from './screens/ResetPassword';
import NewPassword from './screens/NewPassword';
import Home from './screens/Home';
import Profile from './screens/Profile';
import UserBookings from './screens/UserBookings';
import UserTransactions from './screens/UserTransactions';

const MyScreen = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <MyScreen.Navigator initialRouteName='home'>
        <MyScreen.Screen name="login" component={Login} options={{ headerShown: false }} />
        <MyScreen.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <MyScreen.Screen name="resetpassword" component={ResetPassword} options={{ headerShown: false }} />
        <MyScreen.Screen name="newpassword" component={NewPassword} options={{ headerShown: false }} />
        <MyScreen.Screen name="home" component={Home} options={{ headerShown: false }} />
        <MyScreen.Screen name="profile" component={Profile} options={{ headerShown: false }} />
        <MyScreen.Screen name="userbooking" component={UserBookings} options={{ headerShown: false }} />
        <MyScreen.Screen name="usertransaction" component={UserTransactions} options={{ headerShown: false }} />
      </MyScreen.Navigator>
    </NavigationContainer>
  );
}

