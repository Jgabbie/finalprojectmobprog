import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import CancellationRequestStyle from '../../styles/CancellationRequestStyle'
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import { Ionicons } from "@expo/vector-icons"


export default function CancellationRequests() {
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [cancels, setCancels] = useState([
        { id: "1", ref: "CR-0001", username: "jlanuza", package: "Boracay Tour", reason: "Emergency", date: "09-14-2026", },
        { id: "2", ref: "CR-0002", username: "jnssnbau", package: "Japan Tour", reason: "Schedule", date: "09-15-2026", },
        { id: "3", ref: "CR-0003", username: "marionb", package: "Ilocos Tour", reason: "Emergency", date: "09-16-2026", },
        { id: "4", ref: "CR-0004", username: "tayshnsn", package: "Korea Tour", reason: "Emergency", date: "09-17-2026", },
        { id: "5", ref: "CR-0005", username: "jlanuza", package: "El Nido Tour", reason: "Health", date: "10-20-2026", },
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
                            placeholder='Search cancel reference'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={CancellationRequestStyle.dropdownGroup}>
                        <View style={CancellationRequestStyle.dropdownButton} >
                            <Text style={CancellationRequestStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={CancellationRequestStyle.dropdownIcon}
                            />
                        </View>
                        <View style={CancellationRequestStyle.dropdownButton} >
                            <Text style={CancellationRequestStyle.dropdownText} >Date</Text>
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
                    <Text style={CancellationRequestStyle.headerCell}>Ref.</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Username</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Package</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Reason</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Date</Text>
                    <Text style={CancellationRequestStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={cancels}
                    renderItem={({ item }) => (
                        <View style={CancellationRequestStyle.tableRow}>
                            <Text style={CancellationRequestStyle.tableCell}>{item.ref}</Text>
                            <Text style={CancellationRequestStyle.tableCell}>{item.username}</Text>
                            <Text style={CancellationRequestStyle.tableCell}>{item.package}</Text>
                            <Text style={CancellationRequestStyle.tableCell}>{item.reason}</Text>
                            <Text style={CancellationRequestStyle.tableCell}>{item.date}</Text>
                            <View>
                                <TouchableOpacity
                                    style={CancellationRequestStyle.actionButton}
                                >
                                    <Text style={CancellationRequestStyle.viewButtonText}>Approved</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={CancellationRequestStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={CancellationRequestStyle.viewButtonText}>Denied</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}