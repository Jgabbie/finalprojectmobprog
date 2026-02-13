import { StyleSheet } from "react-native";

const AddPackageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        color: "#305797",
        fontWeight: '700',
        fontFamily: 'Roboto_700Bold',
        marginBottom: 15,
        marginTop: 10
    },
    formContainer: {
        paddingBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#000'
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    pickerWrapper: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 12,
        justifyContent: 'center'
    },
    picker: {
        height: 50,
        width: '100%',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        gap: 10
    },
    backButton: {
        flex: 1,
        backgroundColor: "#305797",
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        flex: 1.5,
        backgroundColor: "#305797",
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusIcon: {
        width: 15,
        height: 15,
        marginRight: 8,
        tintColor: '#fff'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Roboto_700Bold',
        fontSize: 14,
        fontWeight: '600'
    },
});

export default AddPackageStyles;