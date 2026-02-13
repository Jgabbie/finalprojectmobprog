import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import BookingManagementStyle from '../../styles/adminstyles/BookingManagementStyle'


export default function BookingManagement() {

    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [bookings, setBookings] = useState([
        { id: "1", ref: "BR-0001", package: "Boracay Tour", pax: "4", date: "09-14-2026", amount: 70000 },
    ])

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
                    <Text style={BookingManagementStyle.headerCell}>Ammount</Text>
                    <Text style={BookingManagementStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={bookings}
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
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={BookingManagementStyle.viewButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                />
            </View>
        </View>
    )
}