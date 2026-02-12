import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaCard from "../components/VisaCard";
import styles from "../styles/VisaStyles";
import Sidebar from "../components/Sidebar";

export default function PassportAssistance({ navigation }) {

const [isSidebarVisible, setSidebarVisible] = useState(false);
const [searchText, setSearchText] = useState('')

return (
    <View>
        <Sidebar
            visible={isSidebarVisible}
            onClose={() => setSidebarVisible(false)}
        />

        <View style={styles.headerContainer}>
        <TouchableOpacity
            style={styles.sideBarButton}
            onPress={() => setSidebarVisible(true)}
        >
        <Image
            source={require('../materials/sidebar_btn.png')}
            style={styles.sideBarImage}
        />
        </TouchableOpacity>
        <Image
            source={require('../materials/mrc_logo2.png')}
            style={styles.logo}
        />
        <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={styles.bellButton}>
        <Image
            source={require('../materials/bell_icon.png')}
            style={styles.bellIcon}
        />
        </TouchableOpacity>
        <Image
            source={require('../materials/profile_icon.png')}
            style={styles.profileIcon}
        />
        </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.title}>Passport Assistance</Text>

        <ScrollView showsVerticalScrollIndicator={false}>

                <VisaCard
                country="APPLY FOR PASSPORT"
                description="Applying for a passport is the first step to traveling abroad, serving as your official travel document and proof of identity."
                image="https://www.kayak.com/rimg/dimg/dynamic/19/2023/10/4505cae772ba9dc830a129823f8e7f4d.webp"
                price="₱2,000"
                onPress={() => navigation.navigate("PassportDetails", { type: "apply", price: 2000 })}
                />

                <VisaCard
                country="RENEW PASSPORT"
                description="Renewing your passport s that your travel document remains valid for international trips without interruptions."
                image="https://ik.imagekit.io/tvlk/blog/2022/05/philippine-passport.jpg?tr=q-70,c-at_max,w-1000,h-600"
                price="₱2,000"
                onPress={() => navigation.navigate("PassportDetails", { type: "renew", price: 2000 })}
                />
            </ScrollView>
        </View>
    </View>
);
}