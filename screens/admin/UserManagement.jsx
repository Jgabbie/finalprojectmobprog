import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import UserManagementStyle from '../../styles/adminstyles/UserManagementStyle'

export default function UserManagement() {

    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [users, setUsers] = useState([
        { id: "1", uNum: "U-0001", username: "juanlanuza", email: "jgl@gmail.com", role: "User" },
    ])

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={UserManagementStyle.container}>
                <Text style={UserManagementStyle.header}>User Management</Text>

                <View style={UserManagementStyle.statsContainer}>
                    <View style={UserManagementStyle.statsRow}>
                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>20</Text>
                            <Text style={UserManagementStyle.cardLabel}>Users</Text>
                        </View>

                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>12</Text>
                            <Text style={UserManagementStyle.cardLabel}>Verified</Text>
                        </View>
                    </View>

                    <View style={UserManagementStyle.statsRow}>
                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>6</Text>
                            <Text style={UserManagementStyle.cardLabel}>Unverified</Text>
                        </View>

                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>2</Text>
                            <Text style={UserManagementStyle.cardLabel}>Admins</Text>
                        </View>
                    </View>
                </View>

                <View style={UserManagementStyle.searchRow}>
                    <View style={UserManagementStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={UserManagementStyle.searchInput}
                            placeholder='Search ID or username'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={UserManagementStyle.dropdownGroup}>
                        <View style={UserManagementStyle.dropdownButton} >
                            <Text style={UserManagementStyle.dropdownText} >Role</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserManagementStyle.dropdownIcon}
                            />
                        </View>
                        <View style={UserManagementStyle.dropdownButton} >
                            <Text style={UserManagementStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserManagementStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={UserManagementStyle.tableHeader}>
                    <Text style={UserManagementStyle.headerCell}>ID</Text>
                    <Text style={UserManagementStyle.headerCell}>Username</Text>
                    <Text style={UserManagementStyle.headerCell}>Email</Text>
                    <Text style={UserManagementStyle.headerCell}>Role</Text>
                    <Text style={UserManagementStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={users}
                    renderItem={({ item }) => (
                        <View style={UserManagementStyle.tableRow}>
                            <Text style={UserManagementStyle.tableCell}>{item.uNum}</Text>
                            <Text style={UserManagementStyle.tableCell}>{item.username}</Text>
                            <Text style={UserManagementStyle.tableCell}>{item.email}</Text>
                            <Text style={UserManagementStyle.tableCell}>{item.role}</Text>
                            <View>
                                <TouchableOpacity
                                    style={UserManagementStyle.actionButton}
                                >
                                    <Text style={UserManagementStyle.viewButtonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={UserManagementStyle.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={UserManagementStyle.viewButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                />
            </View>

        </View>
    )
}