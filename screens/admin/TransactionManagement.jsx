import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import TransactionManagementStyle from '../../styles/adminstyles/TransactionManagementStyle'

export default function TransactionManagement() {

    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [transac, setTransac] = useState([
        { id: "1", ref: "TR-0001", package: "Boracay Tour", status: "Paid", date: "09-14-2026", amount: 70000 },
    ])

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={TransactionManagementStyle.container}>
                <Text style={TransactionManagementStyle.header}>Transaction Management</Text>

                <View style={TransactionManagementStyle.statsContainer}>
                    <View style={TransactionManagementStyle.statsRow}>
                        <View style={TransactionManagementStyle.card}>
                            <Text style={TransactionManagementStyle.cardValue}>20</Text>
                            <Text style={TransactionManagementStyle.cardLabel}>Transactions</Text>
                        </View>

                        <View style={TransactionManagementStyle.card}>
                            <Text style={TransactionManagementStyle.cardValue}>5</Text>
                            <Text style={TransactionManagementStyle.cardLabel}>Pending</Text>
                        </View>
                    </View>

                    <View style={TransactionManagementStyle.statsRow}>
                        <View style={TransactionManagementStyle.card}>
                            <Text style={TransactionManagementStyle.cardValue}>10</Text>
                            <Text style={TransactionManagementStyle.cardLabel}>Complete</Text>
                        </View>

                        <View style={TransactionManagementStyle.card}>
                            <Text style={TransactionManagementStyle.cardValue}>5</Text>
                            <Text style={TransactionManagementStyle.cardLabel}>Failed</Text>
                        </View>
                    </View>
                </View>

                <View style={TransactionManagementStyle.searchRow}>
                    <View style={TransactionManagementStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={TransactionManagementStyle.searchInput}
                            placeholder='Search transaction reference'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={TransactionManagementStyle.dropdownGroup}>
                        <View style={TransactionManagementStyle.dropdownButton} >
                            <Text style={TransactionManagementStyle.dropdownText} >Date</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={TransactionManagementStyle.dropdownIcon}
                            />
                        </View>
                        <View style={TransactionManagementStyle.dropdownButton} >
                            <Text style={TransactionManagementStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={TransactionManagementStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={TransactionManagementStyle.tableHeader}>
                    <Text style={TransactionManagementStyle.headerCell}>Ref.</Text>
                    <Text style={TransactionManagementStyle.headerCell}>Package</Text>
                    <Text style={TransactionManagementStyle.headerCell}>Status</Text>
                    <Text style={TransactionManagementStyle.headerCell}>Date</Text>
                    <Text style={TransactionManagementStyle.headerCell}>Ammount</Text>
                    <Text style={TransactionManagementStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={transac}
                    renderItem={({ item }) => (
                        <View style={TransactionManagementStyle.tableRow}>
                            <Text style={TransactionManagementStyle.tableCell}>{item.ref}</Text>
                            <Text style={TransactionManagementStyle.tableCell}>{item.package}</Text>
                            <Text style={TransactionManagementStyle.tableCell}>{item.status}</Text>
                            <Text style={TransactionManagementStyle.tableCell}>{item.date}</Text>
                            <Text style={TransactionManagementStyle.tableCell}>{item.amount}</Text>
                            <View>
                                <TouchableOpacity
                                    style={TransactionManagementStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={TransactionManagementStyle.viewButtonText}>View</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={TransactionManagementStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={TransactionManagementStyle.viewButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                />
            </View>
        </View>
    )
}