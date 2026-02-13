import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import AdminSidebar from '../../components/AdminSidebar'
import HomeStyle from '../../styles/HomeStyle';
import ReviewManagementStyles from '../../styles/adminstyles/ReviewManagementStyles';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import {Montserrat_400Regular,Montserrat_500Medium,Montserrat_700Bold} from "@expo-google-fonts/montserrat"
import {Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from "@expo-google-fonts/roboto"

export default function ReviewManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [starFilter, setStarFilter] = useState('All')
    const [modalRemoveVisible, setModalRemoveVisible] = useState(false)
    const [modalRemoveOkVisible, setModalRemoveOkVisible] = useState(false)

    const removeOk = () => {
        setModalRemoveVisible(false)
        setModalRemoveOkVisible(true)
    }

    const removeCancel = () => {
        setModalRemoveVisible(false)
    }

    const removeModalOK = () => {
        setModalRemoveOkVisible(false)
    }

    const [reviews, setReviews] = useState([
        {
            id: '1',
            username: 'jglanuza',
            package: 'Boracay Tour',
            stars: 5,
            comment: 'Amazing experience! Highly recommended.'
        },
        {
            id: '2',
            username: 'tayshaun',
            package: 'Japan Tour',
            stars: 4,
            comment: 'Very organized tour, great guides.'
        },
        {
            id: '3',
            username: 'marionblmt',
            package: 'Korea Tour',
            stars: 3,
            comment: 'Good but hotel could be better.'
        },
        {
            id: '4',
            username: 'jsnnsbauca',
            package: 'El Nido Tour',
            stars: 1,
            comment: 'Trip was cancelled last minute.'
        },
    ])

    const filteredReviews = reviews.filter(r => {
        const matchesSearch =
            r.username.toLowerCase().includes(searchText.toLowerCase())||
            r.package.toLowerCase().includes(searchText.toLowerCase())||
            r.comment.toLowerCase().includes(searchText.toLowerCase())

        const matchesStars =
            starFilter==='All'||r.stars===Number(starFilter)

        return matchesSearch && matchesStars
    })

    const renderStars = (count) => (
        <Text style={ReviewManagementStyles.stars}>
            {'★'.repeat(count)}{'☆'.repeat(5-count)}
        </Text>
    )

    const renderItem = ({ item }) => (
        <View style={ReviewManagementStyles.reviewCard}>
            <View style={ReviewManagementStyles.reviewHeader}>
                <Text style={ReviewManagementStyles.username}>{item.username}</Text>
                {renderStars(item.stars)}
            </View>

            <Text style={ReviewManagementStyles.package}>
                Package:{item.package}
            </Text>

            <Text style={ReviewManagementStyles.comment}>
                {item.comment}
            </Text>

            <TouchableOpacity
                style={ReviewManagementStyles.removeButton}
                onPress={() =>{setModalRemoveVisible(true)}}
            >
                <Text style={ReviewManagementStyles.removeButtonText}>
                    Remove
                </Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <View>
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

            <View style={HomeStyle.headerContainer}>
                <TouchableOpacity style={HomeStyle.sideBarButton} onPress={() => setSidebarVisible(true)}>
                    <Image source={require('../../materials/sidebar_btn.png')} style={HomeStyle.sideBarImage} />
                </TouchableOpacity>
                <Image source={require('../../materials/mrc_logo2.png')} style={HomeStyle.logo} />
                <View style={HomeStyle.rightIconsContainer}>
                    <TouchableOpacity style={HomeStyle.bellButton}>
                        <Image source={require('../../materials/bell_icon.png')} style={HomeStyle.bellIcon} />
                    </TouchableOpacity>
                    <Image source={require('../../materials/profile_icon.png')} style={HomeStyle.profileIcon} />
                </View>
            </View>
            <View style={ReviewManagementStyles.container}>
                <Text style={ReviewManagementStyles.header}>Ratings Management</Text>
                <View style={ReviewManagementStyles.statsContainer}>
                    <View style={ReviewManagementStyles.statsRow}>
                        <View style={ReviewManagementStyles.card}>
                            <Text style={ReviewManagementStyles.cardValue}>40</Text>
                            <Text style={ReviewManagementStyles.cardLabel}>Ratings</Text>
                        </View>

                        <View style={ReviewManagementStyles.card}>
                            <Text style={ReviewManagementStyles.cardValue}>36</Text>
                            <Text style={ReviewManagementStyles.cardLabel}>5 Stars</Text>
                        </View>
                    </View>

                    <View style={ReviewManagementStyles.statsRow}>
                        <View style={ReviewManagementStyles.card}>
                            <Text style={ReviewManagementStyles.cardValue}>4</Text>
                            <Text style={ReviewManagementStyles.cardLabel}>1 Star</Text>
                        </View>

                        <View style={ReviewManagementStyles.card}>
                            <Text style={ReviewManagementStyles.cardValue}>4.7</Text>
                            <Text style={ReviewManagementStyles.cardLabel}>Average Rating</Text>
                        </View>
                    </View>
                </View>

                <TextInput
                    style={ReviewManagementStyles.searchBar}
                    placeholder="Search reviews..."
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <Picker
                    selectedValue={starFilter}
                    style={ReviewManagementStyles.picker}
                    onValueChange={value => setStarFilter(value)}
                >
                    <Picker.Item label="All Ratings" value="All" />
                    <Picker.Item label="5 Stars" value="5" />
                    <Picker.Item label="4 Stars" value="4" />
                    <Picker.Item label="3 Stars" value="3" />
                    <Picker.Item label="2 Stars" value="2" />
                    <Picker.Item label="1 Star" value="1" />
                </Picker>

                <FlatList
                    data={filteredReviews}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>

            <Modal
                transparent
                animationType='fade'
                visible={modalRemoveVisible}
                onRequestClose={() => { setModalRemoveVisible }}
            >

                <View style={ReviewManagementStyles.modalOverlay}>
                    <View style={ReviewManagementStyles.modalBox}>
                        <Text style={ReviewManagementStyles.modalTitle}>Remove Review</Text>
                        <Text style={ReviewManagementStyles.modalText}>Are you sure you want to remove this review?</Text>

                        <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                            <TouchableOpacity
                                style={ReviewManagementStyles.modalButton}
                                onPress={() => {
                                    removeOk()
                                }}
                            >
                                <Text style={ReviewManagementStyles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={ReviewManagementStyles.modalCancelButton}
                                onPress={() => {
                                    removeCancel()
                                }}
                            >
                                <Text style={ReviewManagementStyles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                transparent
                animationType='fade'
                visible={modalRemoveOkVisible}
                onRequestClose={() => { setModalRemoveOkVisible }}
            >

                <View style={ReviewManagementStyles.modalOverlay}>
                    <View style={ReviewManagementStyles.modalBox}>
                        <Text style={ReviewManagementStyles.modalTitle}>Review Removed</Text>
                        <Text style={ReviewManagementStyles.modalText}>This review has been successfully removed!</Text>

                        <TouchableOpacity
                            style={ReviewManagementStyles.modalButton}
                            onPress={() => {
                                removeModalOK()
                            }}
                        >
                            <Text style={ReviewManagementStyles.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    )
}