import { StyleSheet } from "react-native";


const PassAndVisaManagementStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 16,
        paddingTop: 16
    },
    header: {
        fontSize: 22,
        color: "#305797",
        fontWeight: '700',
        marginBottom: 16,
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#305797",
        marginBottom: 12
    }
    })

export default PassAndVisaManagementStyles