import { View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import SidebarStyle from '../styles/SidebarStyle'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import ModalStyle from '../styles/ModalStyle'

const AdminSidebar = ({ visible, onClose }) => {

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold,
        Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
    })

    const cs = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)

    const MenuItem = ({ title, onPress }) => (
        <TouchableOpacity style={SidebarStyle.navItem} onPress={onPress}>
            <Text style={[SidebarStyle.navText]}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <Modal transparent={true} visible={visible} animationType="none">
            <View style={{ flex: 1 }}>
                <Pressable style={SidebarStyle.overlay} onPress={onClose}>
                    <View style={SidebarStyle.sidebarContainer}>

                        <View style={SidebarStyle.profileSection}>
                            <Image source={require('../materials/profile_icon60.png')} style={SidebarStyle.profileImg} />
                            <View style={SidebarStyle.nameContainer}>
                                <Text style={SidebarStyle.userName}>Juan Gabriel A. Lanuza</Text>
                                <Text style={SidebarStyle.userHandle}>jgablanuza@gmail.com</Text>
                            </View>
                        </View>

                        <View style={SidebarStyle.divider} />

                        <MenuItem title="Dashboard" onPress={() => handleNavigation("admindashboard")} />
                        <MenuItem title="User Management" onPress={() => handleNavigation("usermanagement")} />
                        <MenuItem title="Booking Management" onPress={() => handleNavigation("bookingmanagement")} />
                        <MenuItem title="Transaction Management" onPress={() => handleNavigation("transactionmanagement")} />
                        <MenuItem title="Package Management" onPress={() => handleNavigation("packagemanagement")} />
                        <MenuItem title="Cancellation Requests" onPress={() => handleNavigation("cancelmanagement")} />
                        <MenuItem title="Review and Ratings" onPress={() => handleNavigation("ratingmanagement")} />
                        <MenuItem title="Passport Applications" onPress={() => handleNavigation("passportapplications")} />
                        <MenuItem title="VISA Applications" onPress={() => handleNavigation("visaapplications")} />
                        <MenuItem title="Logging" onPress={() => handleNavigation("logging")} />
                        <MenuItem title="Auditing" onPress={() => handleNavigation("auditing")} />

                        <View style={SidebarStyle.divider} />

                        <MenuItem title="Logout"
                            onPress={() => {
                                setModalVisible(true)
                            }}
                        />
                    </View>

                    <Modal
                        transparent
                        animationType='fade'
                        visible={modalVisible}
                        onRequestClose={() => { setModalVisible }}
                    >

                        <View style={ModalStyle.modalOverlay}>
                            <View style={ModalStyle.modalBox}>
                                <Text style={ModalStyle.modalTitle}>Confirm Logout</Text>
                                <Text style={ModalStyle.modalText}>Are you sure you want to Logout?</Text>

                                <View style={ModalStyle.modalButtonContainer}>
                                    <TouchableOpacity
                                        style={ModalStyle.modalButton}
                                        onPress={() => {
                                            setModalVisible(false)
                                        }}
                                    >
                                        <Text style={ModalStyle.modalButtonText}>Cancel</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={ModalStyle.modalCancelButton}
                                        onPress={() => {
                                            setModalVisible(false)
                                            onClose()
                                            cs.navigate("login")
                                        }}
                                    >
                                        <Text style={ModalStyle.modalButtonText}>Logout</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Pressable>
            </View>
        </Modal>
    );
};

export default AdminSidebar;