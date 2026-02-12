import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/WishListStyles";
import Sidebar from "../components/Sidebar";
import { useNavigation } from "@react-navigation/native";


export default function PassportDetails({ route }) {
const navigation = useNavigation();
const { price } = route.params;
const [isSidebarVisible, setSidebarVisible] = useState(false);

return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

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
            style={styles.logoHeader}
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

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
                Requirements for Passport
        </Text>
        <Text style={styles.price}>₱{price} / per applicant</Text>


        <View style={styles.card}>
        <Image
            source={{ uri: "https://businessregistrationphilippines.com/wp-content/uploads/2024/06/valid-ids-philippines.jpg" }}
            style={styles.cardImage}
        />
        <View style={styles.cardContent}>
        <Text style={styles.packageTitle}>VALID ID</Text>
            <Text style={styles.description}>
            A valid passport or government-issued ID is mandatory for
            application.
        </Text>
        <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>Upload File</Text>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.card}>
        <Image
        source={{ uri: "https://static.photobooth.online/wp-content/uploads/2024/04/12074312/2-x-2-photo.jpg" }}
        style={styles.cardImage}
        />
        <View style={styles.cardContent}>
            <Text style={styles.packageTitle}>2 x 2 PHOTO</Text>
            <Text style={styles.description}>
            A 2x2 photo with white background, taken within the last 6 months.
        </Text>
        <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewText}>Upload File</Text>
        </TouchableOpacity>
        </View>
        </View>


        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.packageTitle}>Passport Process</Text>

            <Text style={styles.description}>
            STEP 1{"\n"}
            Upload all required documents clearly and completely for admin
            review.
        </Text>

        <Text style={styles.description}>
            STEP 2{"\n"}
            Once approved, submit original documents for verification.
        </Text>
        </View>
        </View>

        <TouchableOpacity
            style={[styles.viewButton, { marginBottom: 30 }]}
            onPress={() => navigation.navigate("passportprogress")}>
        <Text style={styles.viewText}>Proceed</Text>
        </TouchableOpacity>
        </ScrollView>
</View>
);
}