import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120
    },
    loginHeading: {
        fontSize: 60,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 0,
        margin: 20,
        height: 60,
        textAlign: "center"
    },
    loginSecondHeading: {
        fontSize: 40,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginTop: 0,
        margin: 20,
        textAlign: "center"
    },
    loginLabel: {
        fontSize: 16,
        color: "#305797",
        marginLeft: 20
    },
    loginInputs: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#6d6d6d",
        padding: 10,
        marginLeft: 20,
        marginBottom: 10,
        width: 360,
        height: 45
    },
    loginLinks: {
        fontSize: 16,
        color: "#305797"
    },
    loginLinksContainer: {
        margin: 20
    },
    loginButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#305797",
        width: 360,
        height: 45,
        marginLeft: 20,
        borderRadius: 10
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium"
    }
})

export default LoginStyle