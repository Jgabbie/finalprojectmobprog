import { StyleSheet } from "react-native";
import Colors from "../Colors";



export default StyleSheet.create({


    SearchBar: {
        borderWidth: 1,
        backgroundColor: '#fff',
        fontFamily: "Montserrat_400Regular",
        borderColor: "#6d6d6d",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
    },

    logo: {
        width: 60,
        height: 35,
        resizeMode: "contain",
    },

    profileIcon: {
        width: 28,
        height: 28,
    },

    container: {
        padding: 10,
        paddingBottom: 15,
    },

    pageTitle: {
        fontSize: 22,
        color: "#305797",
        fontWeight: '700',
        marginBottom: 16,
    },

    statsRow: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 12,
        flexWrap: "wrap",
    },

    statCard: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        marginRight: 8,
    },

    statNumber: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 3,
    },

    statLabel: {
        fontSize: 10,
        color: "#777",
        textAlign: "center",
    },

    searchInput: {
        backgroundColor: "#eee",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 12,
        fontSize: 13,
    },

    applicationCard: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
        padding: 10,
        marginBottom: 0,
        elevation: 0,
        alignItems: "center",
    },

    tableHeader: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        borderBottomColor: "#e0e0e0",
        marginBottom: 2,
    },

    tableHeaderText: {
        fontWeight: "700",
        color: "#0066cc",
        fontSize: 10,
    },

    serviceColumn: {
        flex: 1.2,
        paddingRight: 8,
    },

    statusColumn: {
        flex: 0.9,
        alignItems: "center",
        paddingHorizontal: 4,
    },

    actionColumn: {
        flex: 0.7,
        alignItems: "center",
    },

    appTitle: {
        fontSize: 11,
        fontWeight: "700",
        marginBottom: 2,
    },

    appRef: {
        fontSize: 10,
        color: "#777",
        marginBottom: 1,
    },

    appPrice: {
        fontSize: 10,
        fontWeight: "700",
        marginTop: 2,
        marginBottom: 4,
    },

    rightColumn: {
        alignItems: "flex-end",
        justifyContent: "space-between",
    },

    statusDropdown: {
        backgroundColor: "#999",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 14,
        flexDirection: "row",
        justifyContent: "center",
    },

    dropdownText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 9,
    },

    statusBadge: {
        backgroundColor: "#ccbc2e",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 12,
        alignSelf: "flex-start",
        marginTop: 2,
    },

    statusText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 9,
    },

    viewButton: {
        backgroundColor: "#305797",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 3,
    },

    viewText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 9,
    },

    documentCard: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
        padding: 10,
        marginBottom: 0,
        elevation: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    docTitle: {
        fontSize: 11,
        fontWeight: "700",
        marginBottom: 2,
    },

    docMeta: {
        fontSize: 9,
        color: "#777",
        marginBottom: 0,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#333",
        marginBottom: 16,
        marginTop: 8,
    },

    documentCardLarge: {
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 16,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 2,
    },

    docTitleLarge: {
        fontSize: 16,
        fontWeight: "700",
        color: "#333",
        marginBottom: 6,
    },

    docSubMeta: {
        fontSize: 12,
        color: "#666",
        marginBottom: 3,
    },

    viewFileButton: {
        backgroundColor: "#305797",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 4,
    },

    viewFileText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 11,
    },

    statsContainer: {
        marginBottom: 20,
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
        elevation: 3
    },
    cardValue: {
        fontSize: 20,
        fontWeight: '700',

    },
    cardLabel: {
        marginTop: 4,
        color: '#777'
    },
    button: {
        marginTop: 10,
        backgroundColor: "#305797",
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    },
});