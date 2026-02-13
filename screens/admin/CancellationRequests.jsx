import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import CancellationRequestStyle from '../../styles/CancellationRequestStyle'
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import { Ionicons } from "@expo/vector-icons"


export default function CancellationRequests() {
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [cancels, setCancels] = useState([
        { id: "1", ref: "BR-0001", package: "Boracay Tour", pax: "4", date: "09-14-2026", amount: 70000 },
    ])
    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={CancellationRequestStyle.container}>
                <Text style={CancellationRequestStyle.header}>Cancellation Requests</Text>

                <View style={CancellationRequestStyle.statsContainer}>
                    <View style={CancellationRequestStyle.statsRow}>
                        <View style={CancellationRequestStyle.card}>
                            <Text style={CancellationRequestStyle.cardValue}>20</Text>
                            <Text style={CancellationRequestStyle.cardLabel}>Requests</Text>
                        </View>

                        <View style={CancellationRequestStyle.card}>
                            <Text style={CancellationRequestStyle.cardValue}>10</Text>
                            <Text style={CancellationRequestStyle.cardLabel}>Pending</Text>
                        </View>
                    </View>

                    <View style={CancellationRequestStyle.statsRow}>
                        <View style={CancellationRequestStyle.card}>
                            <Text style={CancellationRequestStyle.cardValue}>8</Text>
                            <Text style={CancellationRequestStyle.cardLabel}>Approved</Text>
                        </View>

                        <View style={CancellationRequestStyle.card}>
                            <Text style={CancellationRequestStyle.cardValue}>2</Text>
                            <Text style={CancellationRequestStyle.cardLabel}>Denied</Text>
                        </View>
                    </View>
                </View>

                <View style={CancellationRequestStyle.searchRow}>
                    <View style={CancellationRequestStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={CancellationRequestStyle.searchInput}
                            placeholder='Search ID or username'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={CancellationRequestStyle.dropdownGroup}>
                        <View style={CancellationRequestStyle.dropdownButton} >
                            <Text style={CancellationRequestStyle.dropdownText} >Role</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={CancellationRequestStyle.dropdownIcon}
                            />
                        </View>
                        <View style={CancellationRequestStyle.dropdownButton} >
                            <Text style={CancellationRequestStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={CancellationRequestStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={CancellationRequestStyle.tableHeader}>
                    <Text style={CancellationRequestStyle.headerCell}>ID</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Username</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Email</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Role</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={cancels}
                    renderItem={({ item }) => (
                        <View style={CancellationRequestStyle.tableRow}>
                            <Text style={CancellationRequestStyle.tableCell}>{item.uNum}</Text>
                            <Text style={CancellationRequestStyle.tableCell}>{item.username}</Text>
                            <Text style={CancellationRequestStyle.tableCell}>{item.email}</Text>
                            <Text style={CancellationRequestStyle.tableCell}>{item.role}</Text>
                            <View>
                                <TouchableOpacity
                                    style={CancellationRequestStyle.actionButton}
                                >
                                    <Text style={CancellationRequestStyle.viewButtonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={CancellationRequestStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={CancellationRequestStyle.viewButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}