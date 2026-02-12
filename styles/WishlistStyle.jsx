import { StyleSheet } from "react-native";

const WishlistStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 10
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 20,
        overflow: "hidden",
        elevation: 4
    },
    cardImage: {
        width: "100%",
        height: 180,
        resizeMode: "cover"
    },
    cardContent: {
        padding: 15
    },
    packageName: {
        fontSize: 18,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 10
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    oldPrice: {
        fontSize: 14,
        textDecorationLine: "line-through",
        color: "#888",
        marginRight: 10
    },
    newPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#305797",
        marginRight: 10
    },
    discount: {
        fontSize: 14,
        color: "#2e7d32",
        fontWeight: "bold"
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewButton: {
        backgroundColor: "#305797",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6
    },
    removeButton: {
        backgroundColor: "#992A46",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6
    },
    viewButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    }
})

export default WishlistStyle