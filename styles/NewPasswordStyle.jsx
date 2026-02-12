import { StyleSheet } from "react-native";

const NewPasswordStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120
    },
    newPasswordHeading: {
        fontSize: 35,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 0,
        margin: 20,
        height: 40
    },
    newPasswordSecondHeading: {
        fontSize: 25,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginTop: 0,
        margin: 20
    },
    newPasswordLabel: {
        fontSize: 16,
        color: "#305797",
        marginLeft: 20
    },
    newPasswordInputs: {
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
    newPasswordLinks: {
        fontSize: 16,
        color: "#305797"
    },
    newPasswordLinksContainer: {
        margin: 20
    },
    newPasswordButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#305797",
        width: 360,
        height: 45,
        marginLeft: 20,
        borderRadius: 10
    },
    newPasswordButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium"
    }
})

export default NewPasswordStyle