import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import SidebarStyle from '../styles/SidebarStyle'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

const AdminSidebar = ({ visible, onCLose}) => {

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold,
        Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
    })

    const navigation = useNavigation();

    const [logoutModalVisible, setLogoutModalVisible] = useState(false);

    const MenuItem = ({ icon, title, onPress }) => (
        <TouchableOpacity style={SidebarStyle.navItem} onPress={onPress}>
            <Text style={[SidebarStyle.navText, { fontSize: 22 }]}>{title}</Text>
        </TouchableOpacity>
    );

    const handleNavigation = (screenName) => {
        onClose();
        navigation.navigate(screenName);
    };

    const openLogoutConfirm = () => {
        setLogoutModalVisible(true);
    };

    const confirmLogout = () => {
        setLogoutModalVisible(false);
        onClose();
        navigation.navigate("login");
    };

    return (
        <Modal transparent={true} visible={visible} animationType="none">

            <TouchableOpacity style={SidebarStyle.overlay} activeOpacity={1} onPress={onClose}>

                <TouchableWithoutFeedback>

                    <View style={SidebarStyle.sidebarContainer}>

                        <View style={SidebarStyle.profileSection}>
                            <Image source={require('../materials/profile_icon60.png')} style={SidebarStyle.profileImg}/>
                            <View style={SidebarStyle.nameContainer}>
                                <Text style={SidebarStyle.userName}>Juan Gabriel A. Lanuza</Text>
                                <Text style={SidebarStyle.userHandle}>jgablanuza@gmail.com</Text>
                            </View>
                        </View>

                        <View style={SidebarStyle.divider}/>

                        <MenuItem title="Dashboard" onPress={() => handleNavigation("admindashboard")}/>
                        <MenuItem title="User Management" onPress={() => handleNavigation("usermanagement")}/>
                        <MenuItem title="Booking Management" onPress={() => handleNavigation("bookingmanagement")}/>
                        <MenuItem title="Transaction Management" onPress={() => handleNavigation("transactionmanagement")}/>
                        <MenuItem title="Package Management" onPress={() => handleNavigation("packagemanagement")}/>
                        <MenuItem title="Cancellation Requests" onPress={() => handleNavigation("cancelmanagement")}/>
                        <MenuItem title="Review and Ratings" onPress={() => handleNavigation("ratingmanagement")}/>
                        <MenuItem title="Passport Applications" onPress={() => handleNavigation("passportapplications")}/>
                        <MenuItem title="VISA Applications" onPress={() => handleNavigation("visaapplications")}/>
                        <MenuItem title="Logging" onPress={() => handleNavigation("logging")}/>
                        <MenuItem title="Auditing" onPress={() => handleNavigation("auditing")}/>

                        <View style={SidebarStyle.divider} />

                        <MenuItem title="Logout" onPress={openLogoutConfirm}/>

                    </View>

                </TouchableWithoutFeedback>

            </TouchableOpacity>

            <Modal transparent={true} visible={logoutModalVisible} animationType="none">

                <View style={SidebarStyle.modalOverlay}>

                    <View style={SidebarStyle.modalBox}>
                        <TouchableOpacity style={SidebarStyle.closeButton} onPress={() => setLogoutModalVisible(false)}>
                            <Image source={require('../materials/x_icon.png')} style={SidebarStyle.xIcon} />
                        </TouchableOpacity>

                        <Text style={SidebarStyle.modalTitle}>CONFIRM LOGOUT</Text>

                        <Image source={require('../materials/logout_iconbig.png')} style={SidebarStyle.logoutIconBig} />

                        <Text style={SidebarStyle.modalText}>Are you sure you want to Logout?</Text>

                        <View style={SidebarStyle.buttonRow}>
                            <TouchableOpacity style={SidebarStyle.cancelBtn} onPress={() => setLogoutModalVisible(false)}>
                                <Text style={SidebarStyle.buttonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={SidebarStyle.logoutBtn} onPress={confirmLogout}>
                                <Text style={SidebarStyle.buttonText}>Logout</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>
            
        </Modal>
    );
};

export default AdminSidebar;