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
import Wishlist from './screens/Wishlist';
import Notifications from './screens/Notifications';
import VisaGuidance from './screens/VisaGuidance';
import PassportGuidance from './screens/PassportGuidance';
import PassportGuidanceNew from './screens/PassportGuidanceNew';
import PassportGuidanceReNew from './screens/PassportGuidanceReNew';
import PackageDetails from './screens/PackageDetails';
import Packages from './screens/Packages';
import BookingInvoice from './screens/BookingInvoice';
import TransactionReceipt from './screens/TransactionReceipt';
import VisaDetailsGuidance from './screens/VisaDetailsGuidance';
import VisaProgress from './screens/VisaProgress';
import PassportProgress from './screens/PassportProgress';

import AdminDashboard from './screens/admin/AdminDashboard';
import UserManagement from './screens/admin/UserManagement';
import BookingManagement from './screens/admin/BookingManagement';
import TransactionManagement from './screens/admin/TransactionManagement';
import ReviewManagement from './screens/admin/ReviewManagement';
import CancellationRequests from './screens/admin/CancellationRequests';
import PassportApplications from './screens/admin/PassportApplications';
import PassportApplicationView from './screens/admin/PassportApplicationView';
import VisaApplications from './screens/admin/VisaApplications';
import VisaApplicationView from './screens/admin/VisaApplicationView';
import Logging from './screens/admin/Logging';
import Auditing from './screens/admin/Auditing';




export default function App() {

  const MyScreen = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <MyScreen.Navigator initialRouteName='admindashboard'>
        <MyScreen.Screen name="login" component={Login} options={{ headerShown: false }} />
        <MyScreen.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <MyScreen.Screen name="resetpassword" component={ResetPassword} options={{ headerShown: false }} />
        <MyScreen.Screen name="newpassword" component={NewPassword} options={{ headerShown: false }} />
        <MyScreen.Screen name="home" component={Home} options={{ headerShown: false }} />
        <MyScreen.Screen name="profile" component={Profile} options={{ headerShown: false }} />
        <MyScreen.Screen name="userbooking" component={UserBookings} options={{ headerShown: false }} />
        <MyScreen.Screen name="usertransaction" component={UserTransactions} options={{ headerShown: false }} />
        <MyScreen.Screen name="wishlist" component={Wishlist} options={{ headerShown: false }} />
        <MyScreen.Screen name="notifications" component={Notifications} options={{ headerShown: false }} />
        <MyScreen.Screen name="packages" component={Packages} options={{ headerShown: false }} />
        <MyScreen.Screen name="package-details" component={PackageDetails} options={{ headerShown: false }} />
        <MyScreen.Screen name="visaguidance" component={VisaGuidance} options={{ headerShown: false }} />
        <MyScreen.Screen name="visadetailsguidance" component={VisaDetailsGuidance} options={{ headerShown: false }} />
        <MyScreen.Screen name="visaprogress" component={VisaProgress} options={{ headerShown: false }} />
        <MyScreen.Screen name="passportguidance" component={PassportGuidance} options={{ headerShown: false }} />
        <MyScreen.Screen name="passportnewguidance" component={PassportGuidanceNew} options={{ headerShown: false }} />
        <MyScreen.Screen name="passportrenewguidance" component={PassportGuidanceReNew} options={{ headerShown: false }} />
        <MyScreen.Screen name="passportprogress" component={PassportProgress} options={{ headerShown: false }} />
        <MyScreen.Screen name="bookinginvoice" component={BookingInvoice} options={{ headerShown: false }} />
        <MyScreen.Screen name="transactionreceipt" component={TransactionReceipt} options={{ headerShown: false }} />

        <MyScreen.Screen name="admindashboard" component={AdminDashboard} options={{ headerShown: false }} />
        <MyScreen.Screen name="usermanagement" component={UserManagement} options={{ headerShown: false }} />
        <MyScreen.Screen name="bookingmanagement" component={BookingManagement} options={{ headerShown: false }} />
        <MyScreen.Screen name="transactionmanagement" component={TransactionManagement} options={{ headerShown: false }} />
        <MyScreen.Screen name="packagemanagement" component={UserManagement} options={{ headerShown: false }} />
        <MyScreen.Screen name="reviewmanagement" component={ReviewManagement} options={{ headerShown: false }} />
        <MyScreen.Screen name="passportapplications" component={PassportApplications} options={{ headerShown: false }} />
        <MyScreen.Screen name="passportapplicationview" component={PassportApplicationView} options={{ headerShown: false }} />
        <MyScreen.Screen name="visaapplications" component={VisaApplications} options={{ headerShown: false }} />
        <MyScreen.Screen name="visaapplicationview" component={VisaApplicationView} options={{ headerShown: false }} />
        <MyScreen.Screen name="cancellationrequests" component={CancellationRequests} options={{ headerShown: false }} />
        <MyScreen.Screen name="logging" component={Logging} options={{ headerShown: false }} />
        <MyScreen.Screen name="auditing" component={Auditing} options={{ headerShown: false }} />

      </MyScreen.Navigator>
    </NavigationContainer>
  );
}

