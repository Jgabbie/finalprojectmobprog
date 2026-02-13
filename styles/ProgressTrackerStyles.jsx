import { StyleSheet } from "react-native";

export default Stylesheet.create({
    scree: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    header: {
        fontsize: 22,
        fontWeight: "700",
        color: "#305797",
        marginBottom: 20,
        textAlign: "center",
    },
    container: {
        paddingHorizontal: 6,
    },
    stepRow: {
        flexDirection: "row",
        marginBottom: 18,
    },
    indicatorColumn: {
        alignItems: "center",
        width: 30
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    activeCircle: {
        borderColor: "#305797"
    },
    completeCircle: {
        backgroundColor: "#305797",
        borderColor: "#305797"
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: '#ddd',
        marginTop: 4
    },
    completedLine: {
        backgroundColor: "#305797",
    },
    stepCard: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        borderRadius: 14,
        padding: 14,
        marginLeft: 12
    },
    activeCard: {
        backgroundColor: "#fff",
        borderWidth: 2,
        backgroundColor: "#305797"
    },
    stepTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "#305797",
        marginBottom: 4
    },
    stepDescription: {
        fontSize: 13,
        color: "#666",
    },
    button: {
        marginTop: 10,
        backgroundColor: "#305797",
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText: {
        color: '#fff',
        fontSize: 15
    }
})