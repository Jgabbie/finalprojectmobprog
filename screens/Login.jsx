import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import LoginStyle from '../styles/LoginStyle'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { UserContext } from '../context/UserContext'

export default function Login() {

    const cs = useNavigation()

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const getData = useContext(UserContext)
    const { getUsers, setCurrentUser } = getData

    const [getUsername, setUsername] = useState("")
    const [getPassword, setPassword] = useState("")
    const [getError, setError] = useState("")

    const loginUser = () => {
        const matchedUsers = getUsers.filter((element, index) =>
            element.username === getUsername && element.password === getPassword
        )

        console.log(matchedUsers)

        if (matchedUsers.length > 0) {
            setCurrentUser(matchedUsers[0].username)
            setError("")
            cs.navigate("admindashboard")
        } else {
            setError("Invalid Username or Password")
        }
    }


    return (
        <ImageBackground
            source={require("../assets/images/login_background.png")}
            style={LoginStyle.container}
            resizeMode='cover'
        >
            <View>
                <Text style={LoginStyle.loginHeading}>Welcome</Text>
                <Text style={LoginStyle.loginSecondHeading}>Login Here</Text>

                <Text style={LoginStyle.loginLabel}>Username</Text>
                <TextInput style={LoginStyle.loginInputs} onChangeText={(e) => { setUsername(e) }}></TextInput>

                <Text style={LoginStyle.loginLabel}>Password</Text>
                <TextInput style={LoginStyle.loginInputs} onChangeText={(e) => { setPassword(e) }} secureTextEntry={true}></TextInput>

                <Text style={LoginStyle.errorMessage}>{getError}</Text>

                <View style={LoginStyle.loginLinksContainer}>
                    <Text onPress={() => { cs.navigate("signup") }} style={LoginStyle.loginLinks}>Don't have an account? Signup here</Text>
                    <Text onPress={() => { cs.navigate("resetpassword") }} style={LoginStyle.loginLinks}>Forgot your password?</Text>
                </View>

                <TouchableOpacity style={LoginStyle.loginButton} onPress={() => { loginUser() }}>
                    <Text style={LoginStyle.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}