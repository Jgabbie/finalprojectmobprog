import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 10
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 25,
        paddingBottom:20
    },
    sideBarButton:{
        backgroundColor: '#EOE0E0',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignitems: 'center',
    },
    sideBarImage: {
        widht: 45,
        height: 45,
        rsizeMode: 'contain'
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    profileIcon:{
        width: 45,
        height:45,
        borderRadius: 22.5
    },
    bellButton:{
        position: 'absolute',
        top: -5,
        left: -10,
        zIndex:1,
    },
    bellIcon:{
        width: 25,
        height: 25
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: Colors.primary,
        marginBottom:20,
        paddingHorizontal: 5,
    },
    SearchBar: {
        borderWidth: 1,
        backgrounColor:' #fff',
        fontFamily: "Montserrat-400Regular",
        borderColor: '#6d6d6d',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20
    }, 
    searchBox: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        borderRadius: 10,
        paddingHorizontal: 10,
        allignItems: 'center',
        marginBottom: 16,
        marginHorizontal: 16,
    },
    searchInput:{
        marginLeft: 8,
        flex: 1
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 14,
        elevation: 3,
        marginBottom: 16,
        overflow: 'hidden',
    },
    cardImage: {
        width: 200,
        height: 150,
        resizeMode: 'fill'
    },
    cardContent:{
        flex: 1,
        padding:12,
        justifyContent: 'space-between'
    },
    packageTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 4
    },
    description:{
        fontSize: 12,
        color:'#777'
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
    },
    applyButton: {
        marginLeft:'auto',
        borderBlockColor: Colors.primary,
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20
    },
    applyText:{
        color: '#fff',
        fontWeight: '600',
    },
    detailsCard: {
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 16,
        elevation: 3,
        marginBottom: 20,
    },
    detailsTitle: {
        fontSize:18,
        fontWeight: "700"
    },
    detailsPrice:{
        colors: Colors.primary,
        fontWeight: "700",
        marginBottom: 12,
    },
    reqImage:{
        width: 60,
        height: 60,
        borderRadius: 8
    },
    reqTitle: {
        fontWeight: "700"
    },
    uploadBtn:{
        backgroundColor: Colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    uploadText:{
        color: '#fff',
        fontSize: 12
    },
    processCard:{
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 16,
        elevation: 3,
        marginBottom: 20
    },
    processTitle: {
        fontSize:18,
        fontWeight: "700",
        marginBottom: 10
    },
    stepTitle:{
        fontWeight: "700",
        marginTop: 10
    },
    stepText:{
        fontSize: 12,
        color: "#666"
    },
    proceedBtn:{
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        borderRadius: 30,
        allignItems: 'center',
        marginBottom: 30
    },
    proceedtext:{
        color: '#fff',
        fontWeight: "700",
        fontSize: 16
    },
    button: {
        marginTop: 10,
        backgroundColor: "#305797",
        padding: 10,
        borderRadius: 10,
        allignItems: "center"
    },
    buttonText:{
        color: '#fff',
        fontSize: 16
    }

});