import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function Home() {

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

    const TravelCard = ({ image, location, price, packageName, days }) => (
        <View>
            <Image source={image} style={HomeStyle.cardImage} />
            <Text style={HomeStyle.cardTitle}>{packageName}</Text>
            <View style={HomeStyle.infoRow}>
                <Image source={require('../assets/images/date_iconsmall.png')} />
                <Text>{days}</Text>
            </View>
            <View style={HomeStyle.infoRow}>
                <Image source={require('../assets/images/location_iconsmall.png')} />
                <Text>{location}</Text>
            </View>
            <Text style={HomeStyle.priceText}>₱{price}</Text>
        </View>
    )

    const BannerCard = ({ image, packageName, subText }) => (
        <View>
            <Image source={image} style={HomeStyle.cardImage} />
            <View style={HomeStyle.infoRow}>
                <Text>{packageName}</Text>
                <Text>{subText}</Text>
            </View>
            <TouchableOpacity style={HomeStyle.infoRow}>
                <Text>View Packages</Text>
                <Image source={require('../assets/images/arrow_righticon.png')} />
            </TouchableOpacity>
        </View>
    )

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

            <Text>Home</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TravelCard
                    image={require('../assets/images/japan_imagesmall.png')}
                    location="Japan"
                    price="20000"
                />
                <TravelCard
                    image={require('../assets/images/boracay_imagesmall.png')}
                    location="Boracay"
                    price="12000"
                />
                <TravelCard
                    image={require('../assets/images/palawan_imagesmall.png')}
                    location="Palawan"
                    price="15000"
                />
            </ScrollView>
        </View>
    )
}