import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import SidebarStyle from '../styles/SidebarStyle'
import ModalStyle from '../styles/ModalStyle'

export default function Sidebar({ visible, onClose }) {

    const cs = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const MenuItem = ({ icon, title, onPress }) => (
        <TouchableOpacity onPress={onPress} style={SidebarStyle.navItem}>
            <Image source={icon} style={SidebarStyle.navIcon} />
            <Text style={SidebarStyle.navText}>{title}</Text>
        </TouchableOpacity>
    )

    return (
        <Modal transparent={true} visible={visible} animationType='none'>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={SidebarStyle.overlay}
                    activeOpacity={1}
                    onPress={onClose}
                >
                    <TouchableWithoutFeedback>
                        <View style={SidebarStyle.sidebarContainer}>
                            <View style={SidebarStyle.profileSection}>
                                <Image
                                    source={require('../assets/images/profile_icon60.png')}
                                    style={SidebarStyle.profileImg}
                                />
                                <View style={SidebarStyle.nameContainer}>
                                    <Text style={SidebarStyle.userName}>Juan Gabriel Lanuza</Text>
                                    <Text style={SidebarStyle.userHandle}>jgablanuza@gmail.com</Text>
                                </View>
                            </View>

                            <View style={SidebarStyle.divider} />

                            <MenuItem
                                title="Home Page"
                                icon={require('../assets/images/home_icon.png')}
                                onPress={() => { handleNavigation("home") }}
                            />

                            <MenuItem
                                title="User Profile"
                                icon={require('../assets/images/user_icon.png')}
                                onPress={() => { handleNavigation("profile") }}
                            />

                            <MenuItem
                                title="Bookings"
                                icon={require('../assets/images/booking_icon.png')}
                                onPress={() => { handleNavigation("booking") }}
                            />

                            <MenuItem
                                title="Destinations"
                                icon={require('../assets/images/destination_icon.png')}
                                onPress={() => { handleNavigation("destination") }}
                            />

                            <MenuItem
                                title="Wishlist"
                                icon={require('../assets/images/wishlist_icon.png')}
                                onPress={() => { handleNavigation("wishlist") }}
                            />

                            <MenuItem
                                title="Transactions"
                                icon={require('../assets/images/transactions_icon.png')}
                                onPress={() => { handleNavigation("transaction") }}
                            />

                            <MenuItem
                                title="Visa Assistance"
                                icon={require('../assets/images/visa_icon.png')}
                                onPress={() => { handleNavigation("visaservice") }}
                            />

                            <MenuItem
                                title="Passport Assistance"
                                icon={require('../assets/images/passport_icon.png')}
                                onPress={() => { handleNavigation("passportservice") }}
                            />

                            <View style={SidebarStyle.divider} />

                            <MenuItem
                                title="Logout"
                                icon={require('../assets/images/logout_icon.png')}
                                onPress={() => {
                                    setModalVisible(true)
                                }}
                            />

                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>

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
            </View>
        </Modal>

    )
}