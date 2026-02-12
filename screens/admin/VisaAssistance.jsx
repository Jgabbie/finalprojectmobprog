import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaCard from "../components/VisaCard";
import styles from "../styles/VisaStyles";
import Sidebar from "../components/Sidebar";

export default function VisaAssistance({ navigation }) {

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
        <Text style={styles.title}>VISA Assistance</Text>

    <TextInput
        style={styles.SearchBar}
        placeholder='Search VISA...'
        value={searchText}
        onChangeText={setSearchText}
    />

        <ScrollView showsVerticalScrollIndicator={false}>

            <VisaCard
                country="JAPAN VISA"
                description="A Japan visa is an official document issued by the Japanese government allowing entry for tourism, business, or study."
                image="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
                price="₱2,500"
                onPress={() => navigation.navigate("VisaDetails")}
            />

            <VisaCard
                country="KOREA VISA"
                description="A Korea visa allows foreign travelers to enter South Korea for tourism, business, study, or work."
                image="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
                price="₱3,000"
                onPress={() => navigation.navigate("VisaDetails")}
            />

            <VisaCard
                country="CHINA VISA"
                description="A China visa permits foreign nationals to enter China for tourism, business, or other approved purposes."
                image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
                price="₱3,500"
                onPress={() => navigation.navigate("VisaDetails")}
            />

        </ScrollView>
    </View>
</View>
);
}