import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserBookingsStyle from '../styles/UserBookingsStyle'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function UserBookings() {

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

    const [bookings, setBookings] = useState([
        { id: "1", ref: "BR-0001", package: "Boracay Tour", pax: "4", date: "09-14-2026", amount: 70000 },
    ])

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={UserBookingsStyle.container}>
                <Text style={UserBookingsStyle.title}>My Bookings</Text>

                <View style={UserBookingsStyle.tableHeader}>
                    <Text style={UserBookingsStyle.headerCell}>Ref.</Text>
                    <Text style={UserBookingsStyle.headerCell}>Package</Text>
                    <Text style={UserBookingsStyle.headerCell}>Pax</Text>
                    <Text style={UserBookingsStyle.headerCell}>Date</Text>
                    <Text style={UserBookingsStyle.headerCell}>Ammount</Text>
                    <Text style={UserBookingsStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={bookings}
                    renderItem={({ item }) => (
                        <View style={UserBookingsStyle.tableRow}>
                            <Text style={UserBookingsStyle.tableCell}>{item.ref}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.package}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.pax}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.date}</Text>
                            <Text style={UserBookingsStyle.tableCell}>{item.amount}</Text>
                            <TouchableOpacity
                                style={UserBookingsStyle.actionButton}
                                onPress={() => {
                                    cs.navigate("bookinginvoice")
                                }}
                            >
                                <Text style={UserBookingsStyle.viewButtonText}>View</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>

    )
}

//https://www.youtube.com/watch?v=iMCM1NceGJY