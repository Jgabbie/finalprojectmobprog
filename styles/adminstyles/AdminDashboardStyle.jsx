import { StyleSheet } from "react-native";

const AdminDashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 22,
        color: "#305797",
        fontWeight: "700",
        marginBottom: 16
    },
    statsContainer: {
        marginBottom: 20
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#fff',
        width: '48%',
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 6
    },
    cardValue: {
        fontSize: 20,
        fontWeight: '700'
    },
    cardLabel: {
        marginTop: 4,
        color: '#777'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#305797",
        marginBottom: 12
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

export default AdminDashboardStyles