import { StyleSheet } from "react-native";

const ResetPasswordStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 220
    },
    resetPasswordHeading: {
        fontSize: 35,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 0,
        margin: 20,
        height: 40
    },
    resetPasswordSecondHeading: {
        fontSize: 25,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginTop: 0,
        margin: 20
    },
    resetPasswordLabel: {
        fontSize: 16,
        color: "#305797",
        marginLeft: 20
    },
    resetPasswordInputs: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#6d6d6d",
        padding: 10,
        marginLeft: 20,
        marginBottom: 5,
        width: 360,
        height: 45
    },
    resetPasswordLinks: {
        fontSize: 16,
        color: "#305797"
    },
    resetPasswordLinksContainer: {
        margin: 20
    },
    resetPasswordButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#305797",
        width: 360,
        height: 45,
        marginLeft: 20,
        borderRadius: 10
    },
    resetPasswordButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium"
    }
})

export default ResetPasswordStyle