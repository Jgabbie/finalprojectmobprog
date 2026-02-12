import { StyleSheet } from "react-native";

const NotificationStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    title: {
        fontSize: 22,
        fontFamily: "Montserrat_700Bold",
        marginBottom: 20,
        color: '#305797'
    },
    card: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 15,
        elevation: 3,
        boxShadow: "0px, 2px, 6px rgba(0,0,0,0.15)"
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
        color: "#305797"
    },
    cardDate: {
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        color: "#6B7280"
    },
    cardDescription: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#374151'
    }

})
export default NotificationStyle