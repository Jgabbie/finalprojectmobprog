import { View, Text, FlatList, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import BookingManagementStyle from '../../styles/adminstyles/BookingManagementStyle'
import ModalStyle from '../../styles/ModalStyle'
import { UserContext } from '../../context/UserContext'


export default function BookingManagement() {

    const getData = useContext(UserContext)
    const { bookings } = getData

    const [isSidebarVisible, setSidebarVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalOkVisible, setModalOkVisible] = useState(false)

    const mybookings = bookings.map((element, index) => ({
        id: (index + 1).toString(),
        ref: "BR-000" + (index + 1),
        package: element.package,
        pax: element.totalTravelers,
        amount: element.price,
        date: element.date
    }))

    const [getbookings, setBookings] = useState([
        { id: "1", ref: "BR-0001", package: "Boracay Tour", pax: "4", date: "09-14-2026", amount: 70000 },
    ])

    const modalOK = () => {
        setModalOkVisible(false)
    }

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={BookingManagementStyle.container}>
                <Text style={BookingManagementStyle.header}>Booking Management</Text>

                <View style={BookingManagementStyle.statsContainer}>
                    <View style={BookingManagementStyle.statsRow}>
                        <View style={BookingManagementStyle.card}>
                            <Text style={BookingManagementStyle.cardValue}>20</Text>
                            <Text style={BookingManagementStyle.cardLabel}>Bookings</Text>
                        </View>

                        <View style={BookingManagementStyle.card}>
                            <Text style={BookingManagementStyle.cardValue}>5</Text>
                            <Text style={BookingManagementStyle.cardLabel}>Pending</Text>
                        </View>
                    </View>

                    <View style={BookingManagementStyle.statsRow}>
                        <View style={BookingManagementStyle.card}>
                            <Text style={BookingManagementStyle.cardValue}>12</Text>
                            <Text style={BookingManagementStyle.cardLabel}>Complete</Text>
                        </View>

                        <View style={BookingManagementStyle.card}>
                            <Text style={BookingManagementStyle.cardValue}>3</Text>
                            <Text style={BookingManagementStyle.cardLabel}>Cancellations</Text>
                        </View>
                    </View>
                </View>

                <View style={BookingManagementStyle.searchRow}>
                    <View style={BookingManagementStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={BookingManagementStyle.searchInput}
                            placeholder='Search booking reference'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={BookingManagementStyle.dropdownGroup}>
                        <View style={BookingManagementStyle.dropdownButton} >
                            <Text style={BookingManagementStyle.dropdownText} >Date</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={BookingManagementStyle.dropdownIcon}
                            />
                        </View>
                        <View style={BookingManagementStyle.dropdownButton} >
                            <Text style={BookingManagementStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={BookingManagementStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={BookingManagementStyle.tableHeader}>
                    <Text style={BookingManagementStyle.headerCell}>Ref.</Text>
                    <Text style={BookingManagementStyle.headerCell}>Package</Text>
                    <Text style={BookingManagementStyle.headerCell}>Pax</Text>
                    <Text style={BookingManagementStyle.headerCell}>Date</Text>
                    <Text style={BookingManagementStyle.headerCell}>Amount</Text>
                    <Text style={BookingManagementStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={mybookings}
                    renderItem={({ item }) => (
                        <View style={BookingManagementStyle.tableRow}>
                            <Text style={BookingManagementStyle.tableCell}>{item.ref}</Text>
                            <Text style={BookingManagementStyle.tableCell}>{item.package}</Text>
                            <Text style={BookingManagementStyle.tableCell}>{item.pax}</Text>
                            <Text style={BookingManagementStyle.tableCell}>{item.date}</Text>
                            <Text style={BookingManagementStyle.tableCell}>{item.amount}</Text>
                            <View>
                                <TouchableOpacity
                                    style={BookingManagementStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={BookingManagementStyle.viewButtonText}>View</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={BookingManagementStyle.actionButton}
                                    onPress={() => {
                                        setModalVisible(true)
                                    }}
                                >
                                    <Text style={BookingManagementStyle.viewButtonText}>Remove</Text>
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
                        <Text style={ModalStyle.modalTitle}>Remove Booking</Text>
                        <Text style={ModalStyle.modalText}>Are you sure you want to remove this Booking?</Text>

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
                                    setModalOkVisible(true)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Remove</Text>
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
                        <Text style={ModalStyle.modalTitle}>Remove Successful</Text>
                        <Text style={ModalStyle.modalText}>You have removed the booking successfully!</Text>


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