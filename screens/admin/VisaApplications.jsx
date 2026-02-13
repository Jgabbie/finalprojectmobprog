import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import { Ionicons } from "@expo/vector-icons"
import VisaApplicationsStyle from '../../styles/adminstyles/VisaApplicationsStyle'
import { useNavigation } from '@react-navigation/native'


export default function VisaApplications() {

    const [isSidebarVisible, setSidebarVisible] = useState(false)
    const cs = useNavigation()

    const [cancels, setCancels] = useState([
        { id: "1", ref: "VA-0001", username: "jlanuza", service: "Japan Visa", status: "Pending", date: "09-14-2026", },
        { id: "2", ref: "VA-0002", username: "jnssnba", service: "Korea Visa", status: "Pending", date: "09-20-2026", },
        { id: "3", ref: "VA-0003", username: "marionbt", service: "Japan Visa", status: "Pending", date: "10-17-2026", },
        { id: "4", ref: "VA-0004", username: "tayshns", service: "Japan Visa", status: "Pending", date: "10-18-2026", },
        { id: "5", ref: "VA-0005", username: "jlanuza", service: "Korea Visa", status: "Pending", date: "10-19-2026", },
    ])
    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={VisaApplicationsStyle.container}>
                <Text style={VisaApplicationsStyle.header}>VISA Applications</Text>

                <View style={VisaApplicationsStyle.statsContainer}>
                    <View style={VisaApplicationsStyle.statsRow}>
                        <View style={VisaApplicationsStyle.card}>
                            <Text style={VisaApplicationsStyle.cardValue}>30</Text>
                            <Text style={VisaApplicationsStyle.cardLabel}>Applications</Text>
                        </View>

                        <View style={VisaApplicationsStyle.card}>
                            <Text style={VisaApplicationsStyle.cardValue}>7</Text>
                            <Text style={VisaApplicationsStyle.cardLabel}>Pending</Text>
                        </View>
                    </View>

                    <View style={VisaApplicationsStyle.statsRow}>
                        <View style={VisaApplicationsStyle.card}>
                            <Text style={VisaApplicationsStyle.cardValue}>20</Text>
                            <Text style={VisaApplicationsStyle.cardLabel}>Completed</Text>
                        </View>

                        <View style={VisaApplicationsStyle.card}>
                            <Text style={VisaApplicationsStyle.cardValue}>3</Text>
                            <Text style={VisaApplicationsStyle.cardLabel}>Processing</Text>
                        </View>
                    </View>
                </View>

                <View style={VisaApplicationsStyle.searchRow}>
                    <View style={VisaApplicationsStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={VisaApplicationsStyle.searchInput}
                            placeholder='Search application reference'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={VisaApplicationsStyle.dropdownGroup}>
                        <View style={VisaApplicationsStyle.dropdownButton} >
                            <Text style={VisaApplicationsStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={VisaApplicationsStyle.dropdownIcon}
                            />
                        </View>
                        <View style={VisaApplicationsStyle.dropdownButton} >
                            <Text style={VisaApplicationsStyle.dropdownText} >Date</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={VisaApplicationsStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={VisaApplicationsStyle.tableHeader}>
                    <Text style={VisaApplicationsStyle.headerCell}>Ref.</Text>
                    <Text style={VisaApplicationsStyle.headerCell}>Username</Text>
                    <Text style={VisaApplicationsStyle.headerCell}>Service</Text>
                    <Text style={VisaApplicationsStyle.headerCell}>Status</Text>
                    <Text style={VisaApplicationsStyle.headerCell}>Date</Text>
                    <Text style={VisaApplicationsStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={cancels}
                    renderItem={({ item }) => (
                        <View style={VisaApplicationsStyle.tableRow}>
                            <Text style={VisaApplicationsStyle.tableCell}>{item.ref}</Text>
                            <Text style={VisaApplicationsStyle.tableCell}>{item.username}</Text>
                            <Text style={VisaApplicationsStyle.tableCell}>{item.service}</Text>
                            <Text style={VisaApplicationsStyle.tableCell}>{item.status}</Text>
                            <Text style={VisaApplicationsStyle.tableCell}>{item.date}</Text>
                            <View>
                                <TouchableOpacity
                                    style={VisaApplicationsStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("visaapplicationview")
                                    }}
                                >
                                    <Text style={VisaApplicationsStyle.viewButtonText}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}