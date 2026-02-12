import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "../styles/VisaStyles";
import Sidebar from "../components/Sidebar";
import { useNavigation } from "@react-navigation/native";


export default function VisaDetails() {
const navigation = useNavigation();
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

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>Requirements for Japan VISA</Text>
            <Text style={styles.detailsPrice}>₱2,500 / per applicant</Text>


            <View style={styles.requirementRow}>
            <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Philippine_passport.png" }}
                style={styles.reqImage}
            />
            <View style={{ flex: 1 }}>
            <Text style={styles.reqTitle}>PASSPORT</Text>
            <Text style={styles.reqText}>
                A valid passport with at least six months validity.
            </Text>
            </View>
                <TouchableOpacity style={styles.uploadBtn}>
                <Text style={styles.uploadText}>Upload File</Text>
            </TouchableOpacity>
            </View>


                <View style={styles.requirementRow}>
            <Image
                source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
                style={styles.reqImage}
            />
            <View style={{ flex: 1 }}>
            <Text style={styles.reqTitle}>2x2 PHOTO</Text>
            <Text style={styles.reqText}>
                Recent passport-sized photo with white background.
            </Text>
            </View>
            <TouchableOpacity style={styles.uploadBtn}>
                <Text style={styles.uploadText}>Upload File</Text>
            </TouchableOpacity>
            </View>
            </View>


            <View style={styles.processCard}>
            <Text style={styles.processTitle}>VISA Process</Text>

            <Text style={styles.stepTitle}>STEP 1</Text>
            <Text style={styles.stepText}>
                Upload all required documents and submit your application.
            </Text>

            <Text style={styles.stepTitle}>STEP 2</Text>
            <Text style={styles.stepText}>
                Once approved, submit original copies for verification.
            </Text>
            </View>

            <TouchableOpacity
            style={styles.proceedBtn}
            onPress={() => navigation.navigate("visaprogress")}>
            <Text style={styles.proceedText}>Proceed</Text>
            </TouchableOpacity>

        </ScrollView>
    </View>
);
}