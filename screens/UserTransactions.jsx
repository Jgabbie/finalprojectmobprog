import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import UserTransactionStyle from '../styles/UserTransactionStyle'
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function UserTransactions() {

    const cs = useNavigation()
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const [transac, setTransac] = useState([
        { id: "1", ref: "TR-0001", package: "Boracay Tour", status: "Paid", date: "09-14-2026", amount: 70000 },
    ])
    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={UserTransactionStyle.container}>
                <Text style={UserTransactionStyle.title}>My Transactions</Text>

                <View style={UserTransactionStyle.searchRow}>
                    <View style={UserTransactionStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={UserTransactionStyle.searchInput}
                            placeholder='Search booking reference'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={UserTransactionStyle.dropdownGroup}>
                        <View style={UserTransactionStyle.dropdownButton} >
                            <Text style={UserTransactionStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserTransactionStyle.dropdownIcon}
                            />
                        </View>
                        <View style={UserTransactionStyle.dropdownButton} >
                            <Text style={UserTransactionStyle.dropdownText} >Date</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserTransactionStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={UserTransactionStyle.tableHeader}>
                    <Text style={UserTransactionStyle.headerCell}>Ref.</Text>
                    <Text style={UserTransactionStyle.headerCell}>Package</Text>
                    <Text style={UserTransactionStyle.headerCell}>Status</Text>
                    <Text style={UserTransactionStyle.headerCell}>Date</Text>
                    <Text style={UserTransactionStyle.headerCell}>Ammount</Text>
                    <Text style={UserTransactionStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={transac}
                    renderItem={({ item }) => (
                        <View style={UserTransactionStyle.tableRow}>
                            <Text style={UserTransactionStyle.tableCell}>{item.ref}</Text>
                            <Text style={UserTransactionStyle.tableCell}>{item.package}</Text>
                            <Text style={UserTransactionStyle.tableCell}>{item.status}</Text>
                            <Text style={UserTransactionStyle.tableCell}>{item.date}</Text>
                            <Text style={UserTransactionStyle.tableCell}>{item.amount}</Text>
                            <TouchableOpacity
                                style={UserTransactionStyle.actionButton}
                                onPress={() => {
                                    cs.navigate("transactionreceipt")
                                }}
                            >
                                <Text style={UserTransactionStyle.viewButtonText}>View</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>

    )
}

//https://www.youtube.com/watch?v=iMCM1NceGJY