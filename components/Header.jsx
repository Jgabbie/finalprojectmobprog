import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HeaderStyle from '../styles/HeaderStyle'

export default function Header({ openSidebar }) {
    return (
        <View style={HeaderStyle.headerContainer}>
            <TouchableOpacity
                style={HeaderStyle.sideBarButton}
                onPress={openSidebar}
            >
                <Image
                    source={require('../assets/images/sidebar_btn.png')}
                    style={HeaderStyle.sideBarImage}
                />
            </TouchableOpacity>

            <Image
                source={require('../assets/images/mrc_logo2.png')}
                style={HeaderStyle.logo}
            />

            <View style={HeaderStyle.rightIconsContainer}>
                <TouchableOpacity style={HeaderStyle.bellButton}>
                    <Image
                        source={require('../assets/images/bell_icon.png')}
                        style={HeaderStyle.bellIcon}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../assets/images/profile_icon.png')}
                    style={HeaderStyle.profileIcon}
                />
            </View>
        </View>
    )
}