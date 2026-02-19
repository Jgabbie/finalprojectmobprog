import { View, Text, FlatList, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import UserBookingsStyle from '../styles/UserBookingsStyle'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ModalStyle from '../styles/ModalStyle'
import { UserContext } from '../context/UserContext'

export default function UserBookings() {

    const cs = useNavigation()
    const [isSidebarVisible, setSidebarVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalOkVisible, setModalOkVisible] = useState(false)

    const getData = useContext(UserContext)
    const { bookings } = getData

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const mybookings = bookings.map((element, index) => ({
        id: (index + 1).toString(),
        ref: "BR-000" + (index + 1),
        package: element.package,
        pax: element.totalTravelers,
        price: element.price,
        date: element.date
    }))

    const [getbookings, setBookings] = useState([
        { id: "1", ref: "BR-0001", package: "Boracay Tour", pax: "4", date: "09-14-2026", price: 70000 },
    ])

    const modalOK = () => {
        setModalOkVisible(false)
    }

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={UserBookingsStyle.container}>
                <Text style={UserBookingsStyle.title}>My Bookings</Text>

                <View style={UserBookingsStyle.searchRow}>
                    <View style={UserBookingsStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={UserBookingsStyle.searchInput}
                            placeholder='Search booking reference'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={UserBookingsStyle.dropdownGroup}>
                        <View style={UserBookingsStyle.dropdownButton} >
                            <Text style={UserBookingsStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserBookingsStyle.dropdownIcon}
                            />
                        </View>
                        <View style={UserBookingsStyle.dropdownButton} >
                            <Text style={UserBookingsStyle.dropdownText} >Date</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserBookingsStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={UserBookingsStyle.tableHeader}>
                    <Text style={UserBookingsStyle.headerCell}>Ref.</Text>
                    <Text style={UserBookingsStyle.headerCell}>Package</Text>
                    <Text style={UserBookingsStyle.headerCell}>Pax</Text>
                    <Text style={UserBookingsStyle.headerCell}>Date</Text>
                    <Text style={UserBookingsStyle.headerCell}>Amount</Text>
                    <Text style={UserBookingsStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={mybookings}
                    renderItem={({ item }) => (
                        <View style={UserBookingsStyle.tableRow}>
                            <Text style={UserBookingsStyle.tableCell}>{item.ref}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.package}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.pax}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.date}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.price}</Text>
                            <View>
                                <TouchableOpacity
                                    style={UserBookingsStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={UserBookingsStyle.viewButtonText}>View</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={UserBookingsStyle.actionButton}
                                    onPress={() => {
                                        setModalVisible(true)
                                    }}
                                >
                                    <Text style={UserBookingsStyle.viewButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
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
                        <Text style={ModalStyle.modalTitle}>Cancel Booking</Text>
                        <Text style={ModalStyle.modalText}>Are you sure you want to cancel this booking?</Text>

                        <View style={ModalStyle.modalButtonContainer}>
                            <TouchableOpacity
                                style={ModalStyle.modalButton}
                                onPress={() => {
                                    setModalVisible(false)
                                    setModalOkVisible(true)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={ModalStyle.modalCancelButton}
                                onPress={() => {
                                    setModalVisible(false)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType='fade'
                visible={modalOkVisible}
                onRequestClose={() => { setModalOkVisible }}
            >

                <View style={ModalStyle.modalOverlay}>
                    <View style={ModalStyle.modalBox}>
                        <Text style={ModalStyle.modalTitle}>Cancel Request</Text>
                        <Text style={ModalStyle.modalText}>A cancellation request for the booking has been sent!</Text>


                        <TouchableOpacity
                            style={ModalStyle.modalButton}
                            onPress={() => {
                                modalOK()
                            }}
                        >
                            <Text style={ModalStyle.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>

    )
}

//https://www.youtube.com/watch?v=iMCM1NceGJY