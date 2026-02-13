import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import PackageManagementStyles from '../../styles/adminstyles/PackageManagementStyles'
import ModalStyle from '../../styles/ModalStyle'
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { useNavigation } from '@react-navigation/native'

export default function PackageManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const navigation = useNavigation();
    const [removeModalVisible, setRemoveModalVisible] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Montserrat_700Bold
    });

    const [packages, setPackages] = useState([
        { 
            id: "1", 
            name: "Japan Tour Package", 
            slots: "30", 
            price: "42,000", 
            desc: "Experience the best of Japan with a thoughtfully curated tour package that blends tradition and modern culture.",
            image: require('../../materials/japan_imagesmall.png')
        },
        { 
            id: "2", 
            name: "Boracay Tour Package", 
            slots: "30", 
            price: "12,000", 
            desc: "Enjoy a relaxing getaway to Boracay, featuring its famous white-sand beaches and crystal-clear waters.",
            image: require('../../materials/boracay_imagesmall.png')
        },
        { 
            id: "3", 
            name: "Batanes Tour Package", 
            slots: "30", 
            price: "7,000", 
            desc: "Experience the breathtaking beauty of Batanes with a curated tour package showcasing rolling hills.",
            image: require('../../materials/batanes_imagesmall.png')
        },
        { 
            id: "4", 
            name: "Palawan Tour Package", 
            slots: "15", 
            price: "15,000", 
            desc: "Visit the underground river and enjoy the crystal clear lagoons of El Nido.",
            image: require('../../materials/palawan_imagesmall.png')
        },
    ]);

    const filteredPackages = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
    const paginatedData = filteredPackages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const confirmRemove = () => {
        setRemoveModalVisible(false);
        setSuccessModalVisible(true);
    };

    const renderPackageItem = ({ item }) => (
        <View style={PackageManagementStyles.packageCard}>
            <Image source={item.image} style={PackageManagementStyles.packageCardImage}/>
            <View style={PackageManagementStyles.cardContent}>
                <View style={PackageManagementStyles.cardHeaderRow}>
                    <Text style={PackageManagementStyles.packageName}>{item.name}</Text>
                    <Text style={PackageManagementStyles.slotsText}>Slots Available: {item.slots}</Text>
                </View>
                <Text style={PackageManagementStyles.packageDesc} numberOfLines={3}>
                    {item.desc}
                </Text>
                <View style={PackageManagementStyles.cardFooter}>
                    <Text style={PackageManagementStyles.priceText}>₱{item.price}</Text>
                    <View style={PackageManagementStyles.actionButtons}>
                        <TouchableOpacity
                            style={PackageManagementStyles.editBtn}
                            onPress={() => { navigation.navigate("editpackage") }}
                        >
                            <Text style={PackageManagementStyles.btnText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={PackageManagementStyles.removeBtn}
                            onPress={() => setRemoveModalVisible(true)}
                        >
                            <Text style={PackageManagementStyles.btnText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    if (!fontsLoaded) return null;

    return (
        <View style={{ flex: 1 }}>
            
            <Header openSidebar={() => { setSidebarVisible(true) }}/>
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)}/>

            <View style={PackageManagementStyles.container}>
                <Text style={PackageManagementStyles.header}>Package Management</Text>

                <View style={PackageManagementStyles.statsContainer}>
                    <View style={PackageManagementStyles.statsRow}>
                        <View style={PackageManagementStyles.card}>
                            <View style={PackageManagementStyles.valueRow}>
                                <Image source={require('../../materials/total_icon.png')} style={PackageManagementStyles.statsIcon}/>
                                <Text style={PackageManagementStyles.cardValue}>67</Text>
                            </View>
                            <Text style={PackageManagementStyles.cardLabel}>Total Packages</Text>
                        </View>
                        <View style={PackageManagementStyles.card}>
                            <View style={PackageManagementStyles.valueRow}>
                                <Image source={require('../../materials/check_icon.png')} style={PackageManagementStyles.statsIcon}/>
                                <Text style={PackageManagementStyles.cardValue}>12</Text>
                            </View>
                            <Text style={PackageManagementStyles.cardLabel}>Available Packages</Text>
                        </View>
                    </View>
                </View>

                <View style={PackageManagementStyles.searchContainer}>
                    <TextInput style={PackageManagementStyles.SearchBar} placeholder='Search packages...' value={searchText}
                    onChangeText={(text) => { setSearchText(text); setCurrentPage(1); }}/>
                    <TouchableOpacity style={PackageManagementStyles.addPackageBtn} onPress={() => { navigation.navigate("addpackage") }}>
                        <Image source={require('../../materials/plussmall_icon.png')} style={PackageManagementStyles.plusIcon}/>
                        <Text style={PackageManagementStyles.addBtnText}>Add Package</Text>
                    </TouchableOpacity>
                </View>

                <FlatList data={paginatedData} renderItem={renderPackageItem} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>

                <View style={PackageManagementStyles.paginationContainer}>
                    <TouchableOpacity onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))} style={PackageManagementStyles.paginationButton}>
                        <Text style={PackageManagementStyles.paginationText}>Previous</Text>
                    </TouchableOpacity>
                    <Text style={PackageManagementStyles.pageIndicator}> {currentPage} / {totalPages || 1} </Text>
                    <TouchableOpacity onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages || 1))} style={PackageManagementStyles.paginationButton}>
                        <Text style={PackageManagementStyles.paginationText}>Next</Text>
                    </TouchableOpacity>
                </View>

                <Modal 
                    transparent 
                    animationType="fade" 
                    visible={removeModalVisible}
                    onRequestClose={() => setRemoveModalVisible(false)}
                >
                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>Remove Package</Text>
                            <Text style={ModalStyle.modalText}>Are you sure you want to remove this package?</Text>
                            <View style={ModalStyle.modalButtonContainer}>
                                <TouchableOpacity 
                                    style={ModalStyle.modalCancelButton} 
                                    onPress={() => setRemoveModalVisible(false)}
                                >
                                    <Text style={ModalStyle.modalButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={ModalStyle.modalButton} 
                                    onPress={confirmRemove}
                                >
                                    <Text style={ModalStyle.modalButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal 
                    transparent 
                    animationType="fade" 
                    visible={successModalVisible}
                    onRequestClose={() => setSuccessModalVisible(false)}
                >
                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>Success</Text>
                            <Text style={ModalStyle.modalText}>Package has been successfully removed!</Text>
                            <TouchableOpacity 
                                style={[ModalStyle.modalButton, { width: 150 }]} 
                                onPress={() => setSuccessModalVisible(false)}
                            >
                                <Text style={ModalStyle.modalButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}