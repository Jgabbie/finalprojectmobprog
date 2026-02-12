import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import WishlistStyle from '../styles/WishlistStyle'

export default function Wishlist() {

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

    const [packages, setBookings] = useState([
        { id: "1", image: require('../assets/images/japan_imagesmall.png'), packageName: "Japan Tour Package", oldprice: "30000", newprice: "24000", discount: "30%" },
        { id: "2", image: require('../assets/images/japan_imagesmall.png'), packageName: "Japan Tour Package", oldprice: "30000", newprice: "24000", discount: "30%" },
    ])

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={WishlistStyle.container}>

                <Text style={WishlistStyle.title}>My Wishlist</Text>

                <FlatList
                    data={packages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={WishlistStyle.card}>
                            <Image style={WishlistStyle.cardImage} source={item.image} resizeMode='contain' />
                            <View style={WishlistStyle.cardContent}>
                                <Text style={WishlistStyle.packageName}>{item.packageName}</Text>

                                <View style={WishlistStyle.priceRow}>
                                    <Text style={WishlistStyle.oldPrice}>{item.oldprice}</Text>
                                    <Text style={WishlistStyle.newPrice}>{item.newprice}</Text>
                                    <Text style={WishlistStyle.discount}>{item.discount}</Text>
                                </View>

                                <View style={WishlistStyle.buttonRow}>
                                    <TouchableOpacity
                                        style={WishlistStyle.viewButton}
                                    >
                                        <Text style={WishlistStyle.viewButtonText}>View</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={WishlistStyle.removeButton}
                                    >
                                        <Text style={WishlistStyle.viewButtonText}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>



        </View>
    )
}