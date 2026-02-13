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
import ResetPasswordStyle from '../styles/ResetPasswordStyle'
import ModalStyle from '../styles/ModalStyle'

export default function ResetPassword() {
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

    const handleOtp = () => {
        setModalVisible(true)
    }

    return (
        <ImageBackground
            source={require("../assets/images/resetpassword_background.png")}
            style={ResetPasswordStyle.container}
            resizeMode='cover'
        >
            <View>
                <Text style={ResetPasswordStyle.resetPasswordHeading}>Reset Password</Text>
                <Text style={ResetPasswordStyle.resetPasswordSecondHeading}>Enter your Email</Text>

                <Text style={ResetPasswordStyle.resetPasswordLabel}>Email</Text>
                <TextInput style={ResetPasswordStyle.resetPasswordInputs}></TextInput>

                <View style={ResetPasswordStyle.resetPasswordLinksContainer}>
                    <Text onPress={() => { cs.navigate("login") }} style={ResetPasswordStyle.resetPasswordLinks}>Remembered your Password? Login here</Text>
                </View>


                <TouchableOpacity onPress={() => { handleOtp() }} style={ResetPasswordStyle.resetPasswordButton} >
                    <Text style={ResetPasswordStyle.resetPasswordButtonText}>Reset Password</Text>
                </TouchableOpacity>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>OTP Sent</Text>
                            <Text style={ModalStyle.modalText}>Enter your One-Time-Password here</Text>

                            <TextInput
                                style={ModalStyle.otpInput}
                                keyboardType='number-pad'
                                maxLength={6}
                            />
                            <TouchableOpacity
                                style={ModalStyle.modalButton}
                                onPress={() => {
                                    setModalVisible(false)
                                    cs.navigate("newpassword")
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>

    )
}