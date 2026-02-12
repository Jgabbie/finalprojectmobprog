import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 30,
        backgroundColor: "#fff",
        flex: 1,
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 25,
        paddingBottom: 20
    },
    sideBarButton: {
        backgroundColor: '#E0E0E0',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideBarImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    logoHeader: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    profileIcon: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    bellButton: {
        position: 'absolute',
        top: -5,
        left: -10,
        zIndex: 1,
    },
    bellIcon: {
        width: 25,
        height: 25,
    },


    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },

    logo: {
        width: 60,
        height: 40,
        resizeMode: "contain",
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        fontFamily: "Montserrat_700Bold",
        color: Colors.primary,
        marginVertical: 12,
    },

    filterRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 16,
    },
    SearchBar: {
        borderWidth: 1,
        backgroundColor: '#fff',
        fontFamily: "Montserrat_400Regular",
        borderColor: "#6d6d6d",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eee",
        borderRadius: 10,
        paddingHorizontal: 10,
        flex: 1,
    },

    searchInput: {
        marginLeft: 8,
        flex: 1,
    },

    statusButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 12,
        gap: 6,
    },

    statusText: {
        color: Colors.primary,
        fontWeight: "600",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 14,
        marginBottom: 16,
        elevation: 3,
        overflow: "hidden",
        flexDirection: "row",
    },

    imageWrapper: {
        position: "relative",
        width: 100,
        height: 100,
    },

    cardImage: {
        width: 100,
        height: 100,
    },

    discountBadge: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "#2ecc71",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        zIndex: 10,
    },

    discountText: {
        color: "#fff",
        fontWeight: "700",
    },

    cardContent: {
        padding: 12,
        flex: 1,
        justifyContent: "space-between",
    },

    packageTitle: {
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 4,
    },

    description: {
        fontSize: 11,
        color: Colors.muted,
        marginBottom: 6,
    },

    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 8,
    },

    oldPrice: {
        textDecorationLine: "line-through",
        color: "#aaa",
        fontSize: 13,
    },

    price: {
        fontSize: 18,
        fontWeight: "700",
    },

    viewButton: {
        marginLeft: "auto",
        backgroundColor: Colors.primary,
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
    },

    viewText: {
        color: "#fff",
        fontWeight: "600",
    },
});