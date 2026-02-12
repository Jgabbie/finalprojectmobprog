import { View, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font'
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat"
import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { useNavigation } from '@react-navigation/native'
import ProfileStyle from '../styles/ProfileStyle'
import ModalStyle from '../styles/ModalStyle'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


export default function Profile() {
    const [editing, setEditing] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [saveModalVisible, setSaveModalVisible] = useState(false)
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const handleSavePress = () => {
        if (editing) {
            setModalVisible(true)
        } else {
            setEditing(true)
        }
    }

    const confirmSave = () => {
        setEditing(false)
        setModalVisible(false)
        setSaveModalVisible(true)
        console.log("Saved")
    }

    const cancelSave = () => {
        setModalVisible(false)
    }

    const modalOK = () => {
        setEditing(false)
        setSaveModalVisible(false)
    }

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

            <View style={ProfileStyle.container}>

                <View style={ProfileStyle.profileImageContainer}>
                    <Image
                        source={require("../assets/images/profile_picture.png")}
                        style={ProfileStyle.profileImage}
                    />
                </View>

                <Text style={ProfileStyle.profileHeading}>Personal Information</Text>
                <Text style={ProfileStyle.profileLabel}>Username</Text>
                <TextInput style={ProfileStyle.profileInputs}></TextInput>

                <View style={ProfileStyle.fullNameContainer}>
                    <View>
                        <Text style={ProfileStyle.profileLabel} >First Name</Text>
                        <TextInput style={ProfileStyle.nameInputs}></TextInput>
                    </View>

                    <View>
                        <Text style={ProfileStyle.profileLabel}>Last Name</Text>
                        <TextInput style={ProfileStyle.nameInputs}></TextInput>
                    </View>
                </View>

                <Text style={ProfileStyle.profileLabel}>Email</Text>
                <TextInput style={ProfileStyle.profileInputs}></TextInput>

                <Text style={ProfileStyle.profileLabel}>Phone Number</Text>
                <TextInput style={ProfileStyle.profileInputs}></TextInput>

                <Text style={ProfileStyle.profileLabel}>Address</Text>
                <TextInput style={ProfileStyle.profileInputs}></TextInput>

                <Text style={ProfileStyle.profileLabel}>Gender</Text>
                <TextInput style={ProfileStyle.profileInputs}></TextInput>

                <TouchableOpacity style={ProfileStyle.profileButton} >
                    <Text style={ProfileStyle.profileButtonText} onPress={() => { handleSavePress() }}>
                        {editing ? "Save Profile" : "Edit Profile"}
                    </Text>
                </TouchableOpacity>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>Confirm Changes</Text>
                            <Text style={ModalStyle.modalText}>Are you sure you want to save these changes?</Text>

                            <View style={ModalStyle.modalButtonContainer}>
                                <TouchableOpacity
                                    style={ModalStyle.modalButton}
                                    onPress={() => {
                                        confirmSave()
                                    }}
                                >
                                    <Text style={ModalStyle.modalButtonText}>Save</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={ModalStyle.modalCancelButton}
                                    onPress={() => {
                                        cancelSave()
                                    }}
                                >
                                    <Text style={ModalStyle.modalButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

                <Modal
                    transparent
                    animationType='fade'
                    visible={saveModalVisible}
                    onRequestClose={() => { setSaveModalVisible }}
                >

                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>Change Successful</Text>
                            <Text style={ModalStyle.modalText}>Your profile changes has been changed and saved successfully!</Text>


                            <TouchableOpacity
                                style={ModalStyle.modalButton}
                                onPress={() => {
                                    modalOK()
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>OK</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}