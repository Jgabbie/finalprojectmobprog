import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import { Ionicons } from "@expo/vector-icons"
import PassportApplicationsStyle from '../../styles/adminstyles/PassportApplicationStyle'
import { useNavigation } from '@react-navigation/native'

export default function PassportApplications() {
    const cs = useNavigation()
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [cancels, setCancels] = useState([
        { id: "1", ref: "PA-0001", username: "jlanuza", service: "Re-new Passport", status: "Pending", date: "09-14-2026", },
        { id: "2", ref: "PA-0002", username: "jnssnba", service: "Passport", status: "Pending", date: "09-18-2026", },
        { id: "3", ref: "PA-0003", username: "marionbt", service: "Passport", status: "Pending", date: "09-17-2026", },
        { id: "4", ref: "PA-0004", username: "tayshns", service: "Re-new Passport", status: "Pending", date: "10-20-2026", },
        { id: "5", ref: "PA-0005", username: "jlanuza", service: "Re-new Passport", status: "Pending", date: "10-21-2026", },
    ])

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={PassportApplicationsStyle.container}>
                <Text style={PassportApplicationsStyle.header}>Passport Applications</Text>

                <View style={PassportApplicationsStyle.statsContainer}>
                    <View style={PassportApplicationsStyle.statsRow}>
                        <View style={PassportApplicationsStyle.card}>
                            <Text style={PassportApplicationsStyle.cardValue}>24</Text>
                            <Text style={PassportApplicationsStyle.cardLabel}>Applications</Text>
                        </View>

                        <View style={PassportApplicationsStyle.card}>
                            <Text style={PassportApplicationsStyle.cardValue}>3</Text>
                            <Text style={PassportApplicationsStyle.cardLabel}>Pending</Text>
                        </View>
                    </View>

                    <View style={PassportApplicationsStyle.statsRow}>
                        <View style={PassportApplicationsStyle.card}>
                            <Text style={PassportApplicationsStyle.cardValue}>19</Text>
                            <Text style={PassportApplicationsStyle.cardLabel}>Completed</Text>
                        </View>

                        <View style={PassportApplicationsStyle.card}>
                            <Text style={PassportApplicationsStyle.cardValue}>2</Text>
                            <Text style={PassportApplicationsStyle.cardLabel}>Processing</Text>
                        </View>
                    </View>
                </View>

                <View style={PassportApplicationsStyle.searchRow}>
                    <View style={PassportApplicationsStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={PassportApplicationsStyle.searchInput}
                            placeholder='Search application reference'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={PassportApplicationsStyle.dropdownGroup}>
                        <View style={PassportApplicationsStyle.dropdownButton} >
                            <Text style={PassportApplicationsStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={PassportApplicationsStyle.dropdownIcon}
                            />
                        </View>
                        <View style={PassportApplicationsStyle.dropdownButton} >
                            <Text style={PassportApplicationsStyle.dropdownText} >Date</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={PassportApplicationsStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={PassportApplicationsStyle.tableHeader}>
                    <Text style={PassportApplicationsStyle.headerCell}>Ref.</Text>
                    <Text style={PassportApplicationsStyle.headerCell}>Username</Text>
                    <Text style={PassportApplicationsStyle.headerCell}>Service</Text>
                    <Text style={PassportApplicationsStyle.headerCell}>Status</Text>
                    <Text style={PassportApplicationsStyle.headerCell}>Date</Text>
                    <Text style={PassportApplicationsStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={cancels}
                    renderItem={({ item }) => (
                        <View style={PassportApplicationsStyle.tableRow}>
                            <Text style={PassportApplicationsStyle.tableCell}>{item.ref}</Text>
                            <Text style={PassportApplicationsStyle.tableCell}>{item.username}</Text>
                            <Text style={PassportApplicationsStyle.tableCell}>{item.service}</Text>
                            <Text style={PassportApplicationsStyle.tableCell}>{item.status}</Text>
                            <Text style={PassportApplicationsStyle.tableCell}>{item.date}</Text>
                            <View>
                                <TouchableOpacity
                                    style={PassportApplicationsStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("passportapplicationview")
                                    }}
                                >
                                    <Text style={PassportApplicationsStyle.viewButtonText}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}