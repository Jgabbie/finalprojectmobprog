import { View, Text, FlatList, } from 'react-native'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import NotificationStyle from '../styles/NotificationStyle'

export default function Notifications() {

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

    const [notifs, setNotifs] = useState([
        { id: "1", title: "Booking Successful", description: "Your booking of Japan Tour Package has been successful", date: "01-15-2026" },
    ])

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

            <View style={NotificationStyle.container}>

                <Text style={NotificationStyle.title}>My Notifications</Text>

                <FlatList
                    data={notifs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={NotificationStyle.card}>
                            <View style={NotificationStyle.cardHeader}>
                                <Text style={NotificationStyle.cardTitle}>{item.title}</Text>
                                <Text style={NotificationStyle.cardDate}>{item.date}</Text>
                            </View>

                            <Text style={NotificationStyle.cardDescription}>{item.description}</Text>
                        </View>
                    )}
                />

            </View>
        </View>

    )
}