import { StyleSheet } from "react-native";

const TransactionReceiptStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    header: {
        alignItems: "center",
        marginBottom: 15
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    companyName: {
        fontSize: 22,
        fontWeight: '700',
        color: "#305797",
        marginTop: 5
    },
    receiptNumber: {
        fontSize: 20,
        fontWeight: '700',
        color: "#305797",
        marginBottom: 5
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: "center",
        color: "#305797"
    },
    card: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 20
    },
    label: {
        fontSize: 14,
        color: "#6d6d6d",
        marginTop: 10
    },
    value: {
        fontSize: 16,
        fontWeight: "500"
    },
    amount: {
        fontSize: 22,
        fontWeight: "700",
        color: "#305797",
        marginTop: 10
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
    companyDetails: {
        marginTop: 30,
        borderTopWidth: 1,
        borderColor: "#ddd",
        paddingTop: 10,
        alignItems: "center"
    },
    companyDetailsText: {
        fontSize: 13,
        color: "#6d6d6d"
    }
})

export default TransactionReceiptStyle