import { StyleSheet } from "react-native";


const ReviewManagementStyles = StyleSheet.create({

    container: {
        flex:1,
        padding:16,
        backgroundColor:"#f5f5f5",
        paddingHorizontal:16,
        paddingTop:16
    },
    header: {
        fontSize:22,
        color:"#305797",
        fontWeight:'700',
        marginBottom:16,
    },
    statsContainer: {
        marginBottom:20,
    },
    statsRow: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:12,
    },
    card: {
        backgroundColor:'#fff',
        width:'48%',
        padding:16,
        borderRadius:10,
        elevation:3
    },
    cardValue: {
        fontSize:20,
        fontWeight:'700',
    },
    cardLabel: {
        marginTop:4,
        color:'#777'
    },
    sectionTitle: {
        fontSize:18,
        fontWeight:'600',
        color:'#305797',
        marginBottom:12
    },
    reviewCard: {
        backgroundColor:'#fff',
        padding:14,
        borderRadius:10,
        marginBottom:12,
        elevation:2
    },
    reviewHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:6
    },
    username: {
        fontWeight:'700',
        color:'#305797'
    },
    stars: {
        color:'#f4b400',
        fontSize:14
    },
    package: {
        fontSize:12,
        color:'#555',
        marginBottom:6
    },
    comment: {
        fontSize:13,
        color:'#333'
    },
    searchBar: {
        borderWidth:1,
        backgroundColor:"#fff",
        borderColor:"#6d6d6d",
        fontFamily:"Montserrat_400Regular",
        borderRadius:10,
        padding:10,
        marginBottom:10
    },
    picker: {
        fontFamily:"Montserrat_400Regular",
        height:50,
        marginBottom:10,
        borderRadius:10
    },
    removeButton: {
        marginTop:10,
        alignSelf:'flex-end',
        backgroundColor:'#9E2847',
        paddingVertical:6,
        paddingHorizontal:14,
        borderRadius:8
    },
    removeButtonText: {
        color:'#fff',
        fontSize:12,
        fontWeight:'600'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor:"rgba(0,0,0,0.4)",
        justifyContent:"center",
        alignItems:"center"
    },
    modalBox: {
        width:400,
        backgroundColor:"#fff",
        borderRadius:15,
        padding:20,
        alignItems:"center"
    },
    modalTitle: {
        fontSize: 22,
        fontFamily:"Montserrat_700Bold",
        color:"#305797",
        marginBottom:10
    },
    modalText: {
        fontSize:16,
        fontFamily:"Roboto_400Regular",
        textAlign:"center",
        marginBottom:20,
    },
    modalButton: {
        backgroundColor:"#305797",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:8
    },
    modalCancelButton: {
        backgroundColor:"#9E2847",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:8
    },
    modalButtonText: {
        color:"#fff",
        fontSize:16,
        fontFamily:"Roboto_500Medium"
    },
})

export default ReviewManagementStyles