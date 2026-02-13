import { View, Text, TextInput, TouchableOpacity, Modal, ImageBackground, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
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
import SignupStyle from '../styles/SignupStyle'
import ModalStyle from '../styles/ModalStyle'


export default function Signup() {

    const cs = useNavigation()

    const getData = useContext(UserContext)
    const { setUsers, getUsers } = getData

    const [modalVisible, setModalVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const [user, setUser] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        phonenum: "",
        password: "",
        confirmpassword: "",
    })

    const changeHandler = (textField, value) => {
        setUser({ ...user, [textField]: value })
    }

    console.log(getUsers)

    const handleSignup = () => {
        const existingUserName = getUsers.filter((element, index) => { return element.username === user.username })

        if (existingUserName.length > 0) {
            console.log("Username already exists")
            return
        }

        if (user.password !== user.confirmpassword) {
            console.log("Passowrd and Confirm Password are not matching")
            return
        }

        console.log(user)
        setUsers([...getUsers, user])
        setModalVisible(true)
    }

    return (
        <ImageBackground
            source={require("../assets/images/login_background.png")}
            style={SignupStyle.container}
            resizeMode='cover'
        >
            <View>
                <Text style={SignupStyle.signupHeading}>Welcome</Text>
                <Text style={SignupStyle.signupSecondHeading}>Create an Account</Text>

                <Text style={SignupStyle.signupLabel}>Username</Text>
                <TextInput style={SignupStyle.signupInputs} onChangeText={(e) => { changeHandler("username", e) }}></TextInput>

                <View style={SignupStyle.fullNameContainer}>
                    <View>
                        <Text style={SignupStyle.signupLabel} >First Name</Text>
                        <TextInput style={SignupStyle.nameInputs} onChangeText={(e) => { changeHandler("firstname", e) }}></TextInput>
                    </View>

                    <View>
                        <Text style={SignupStyle.signupLabel}>Last Name</Text>
                        <TextInput style={SignupStyle.nameInputs} onChangeText={(e) => { changeHandler("lastname", e) }}></TextInput>
                    </View>
                </View>

                <Text style={SignupStyle.signupLabel}>Email</Text>
                <TextInput style={SignupStyle.signupInputs} onChangeText={(e) => { changeHandler("email", e) }}></TextInput>

                <Text style={SignupStyle.signupLabel}>Phone Number</Text>
                <TextInput style={SignupStyle.signupInputs} onChangeText={(e) => { changeHandler("phonenum", e) }}></TextInput>

                <Text style={SignupStyle.signupLabel}>Password</Text>
                <TextInput style={SignupStyle.signupInputs} secureTextEntry={true} onChangeText={(e) => { changeHandler("password", e) }}></TextInput>

                <Text style={SignupStyle.signupLabel}>Confirm Password</Text>
                <TextInput style={SignupStyle.signupInputs} secureTextEntry={true} onChangeText={(e) => { changeHandler("confirmpassword", e) }}></TextInput>

                <View style={SignupStyle.signupLinksContainer}>
                    <Text onPress={() => { cs.navigate("login") }} style={SignupStyle.signupLinks}>Already have an account? Login here</Text>
                </View>


                <TouchableOpacity style={SignupStyle.signupButton} >
                    <Text style={SignupStyle.signupButtonText} onPress={() => { handleSignup() }}>Signup</Text>
                </TouchableOpacity>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>Account Created</Text>
                            <Text style={ModalStyle.modalText}>Your Account has been successfully created</Text>

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
