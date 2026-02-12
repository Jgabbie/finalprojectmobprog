import { StyleSheet } from "react-native";

const UserBookingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#305797"
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#305797",
        paddingVertical: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    headerCell: {
        flex: 1,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 14
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: "#f9f9f9"
    },
    tableCell: {
        flex: 1,
        textAlign: "center",
        fontSize: 13,
        color: "#333"
    },
    actionButton: {
        flex: 1,
        alignItems: "center"
    },
    viewButtonText: {
        color: "#305797",
        fontWeight: "bold"
    }

})

export default UserBookingsStyle