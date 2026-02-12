import { StyleSheet } from 'react-native'

const SidebarStyle = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: 'flex-start'
    },
    sidebarContainer: {
        width: '75%',
        flex: 1,
        backgroundColor: '#4076A0',
        paddingTop: 40,
        paddingHorizontal: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    profileSection: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    nameContainer: {
        marginLeft: 15,
    },
    userName: {
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        fontSize: 16,
    },
    userHandle: {
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'noraml',
        fontSize: 14
    },
    divider: {
        height: 2,
        backgroundColor: "#fff",
        marginVertical: 15,
        opacity: 0.8
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    navIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    navText: {
        color: "#fff",
        fontFamily: 'Montserrat_500Medium',
        fontSize: 18,
        marginLeft: 12,
        fontWeight: '500'
    },
})

export default SidebarStyle