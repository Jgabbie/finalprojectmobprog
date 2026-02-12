import { StyleSheet } from "react-native";

const ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileHeading: {
        fontSize: 30,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 30,
        textAlign: "center"
    },
    profileSecondHeading: {
        fontSize: 30,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginTop: 0,
        margin: 20,
        textAlign: "center"
    },
    profileLabel: {
        fontSize: 16,
        color: "#305797",
        marginLeft: 20
    },
    profileInputs: {
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
    fullNameContainer: {
        display: "flex",
        flexDirection: "row"
    },
    nameInputs: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#6d6d6d",
        padding: 10,
        marginLeft: 20,
        marginBottom: 10,
        width: 170,
        height: 45
    },
    profileLinks: {
        fontSize: 16,
        color: "#305797"
    },
    profileLinksContainer: {
        margin: 20
    },
    profileButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#305797",
        width: 360,
        height: 45,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 10
    },
    profileButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium"
    },
    profileImageContainer: {
        alignItems: "center"
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginBottom: 10,
        marginTop: 40
    }
})

export default ProfileStyle