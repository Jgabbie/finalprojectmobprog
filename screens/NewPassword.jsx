import { View, Text, TextInput, TouchableOpacity, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from '@expo-google-fonts/montserrat'
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
import NewPasswordStyle from '../styles/NewPasswordStyle'
import ModalStyle from '../styles/ModalStyle'

export default function NewPassword() {
    const cs = useNavigation()

    const [modalVisible, setModalVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const handleNewPass = () => {
        setModalVisible(true)
    }

    return (
        <ImageBackground
            source={require("../assets/images/resetpassword_background.png")}
            style={NewPasswordStyle.container}
            resizeMode='cover'
        >
            <View>
                <Text style={NewPasswordStyle.newPasswordHeading}>New Password</Text>
                <Text style={NewPasswordStyle.newPasswordSecondHeading}>Enter your new Password</Text>

                <Text style={NewPasswordStyle.newPasswordLabel}>Password</Text>
                <TextInput style={NewPasswordStyle.newPasswordInputs}></TextInput>

                <Text style={NewPasswordStyle.newPasswordLabel}>Confirm Password</Text>
                <TextInput style={NewPasswordStyle.newPasswordInputs}></TextInput>

                <View style={NewPasswordStyle.newPasswordLinksContainer}>
                    <Text onPress={() => { cs.navigate("login") }} style={NewPasswordStyle.newPasswordLinks}>Remembered your Password? Login here</Text>
                </View>


                <TouchableOpacity onPress={() => { handleNewPass() }} style={NewPasswordStyle.newPasswordButton} >
                    <Text style={NewPasswordStyle.newPasswordButtonText}>New Password</Text>
                </TouchableOpacity>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>Password Reset</Text>
                            <Text style={ModalStyle.modalText}>You have successfully changed your password</Text>

                            <TouchableOpacity
                                style={ModalStyle.modalButton}
                                onPress={() => {
                                    setModalVisible(false)
                                    cs.navigate("login")
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Go to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    )
}