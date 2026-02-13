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
        color: "#305797",
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
    },
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 16
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f6f8fc",
        borderRadius: 22,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#dbe3ef"
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 13,
        color: "#333",
    },
    dropdownGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    dropdownButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eef3fb",
        borderRadius: 18,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#d6e0f0"
    },
    dropdownIcon: {
        marginLeft: 6
    },

})

export default UserBookingsStyle