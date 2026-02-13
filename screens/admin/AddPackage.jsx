import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Header from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';
import AddPackageStyles from '../../styles/adminstyles/AddPackageStyles';
import ModalStyle from '../../styles/ModalStyle';
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat'

export default function AddPackage() {
    const navigation = useNavigation();
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [type, setType] = useState('');
    const [familyFriendly, setFamilyFriendly] = useState('');

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Montserrat_700Bold
    });

    const handleSuccess = () => {
        setModalVisible(false);
        navigation.navigate("packagemanagement");
    };

    if (!fontsLoaded) return null;

    return (
        <View style={{ flex: 1 }}>

            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

            <View style={AddPackageStyles.container}>
                <Text style={AddPackageStyles.headerText}>Add Package</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={AddPackageStyles.formContainer}>
                    <TextInput style={AddPackageStyles.input} placeholder="Enter Package Name..." placeholderTextColor="#A9A9A9" />
                    <TextInput style={AddPackageStyles.input} placeholder="Enter Price..." placeholderTextColor="#A9A9A9" keyboardType="numeric" />
                    <TextInput style={AddPackageStyles.input} placeholder="Insert Photos..." placeholderTextColor="#A9A9A9" />
                    <TextInput style={AddPackageStyles.input} placeholder="Accommodation" placeholderTextColor="#A9A9A9" />
                    <TextInput style={AddPackageStyles.input} placeholder="Duration" placeholderTextColor="#A9A9A9" />
                    <TextInput style={AddPackageStyles.input} placeholder="Transportation" placeholderTextColor="#A9A9A9" />

                    <View style={AddPackageStyles.pickerWrapper}>
                        <Picker selectedValue={type} onValueChange={(item) => setType(item)} style={AddPackageStyles.picker}>
                            <Picker.Item label="Type" value="" color="#A9A9A9" />
                            <Picker.Item label="Local" value="local" />
                            <Picker.Item label="International" value="international" />
                        </Picker>
                    </View>

                    <View style={AddPackageStyles.pickerWrapper}>
                        <Picker selectedValue={familyFriendly} onValueChange={(item) => setFamilyFriendly(item)} style={AddPackageStyles.picker}>
                            <Picker.Item label="Family Friendly" value="" color="#A9A9A9" />
                            <Picker.Item label="Yes" value="yes" />
                            <Picker.Item label="No" value="no" />
                        </Picker>
                    </View>

                    <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Short Description..." placeholderTextColor="#A9A9A9" multiline={true} />
                    <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Terms and Conditions..." placeholderTextColor="#A9A9A9" multiline={true} />
                    <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Inclusions..." placeholderTextColor="#A9A9A9" multiline={true} />
                    <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Exclusions..." placeholderTextColor="#A9A9A9" multiline={true} />
                    <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Itinerary..." placeholderTextColor="#A9A9A9" multiline={true} />

                    <View style={AddPackageStyles.buttonRow}>
                        <TouchableOpacity style={AddPackageStyles.backButton} onPress={() => navigation.navigate("packagemanagement")}>
                            <Text style={AddPackageStyles.buttonText}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={AddPackageStyles.addButton} onPress={() => setModalVisible(true)}>
                            <Image source={require('../../materials/plussmall_icon.png')} style={AddPackageStyles.plusIcon} />
                            <Text style={AddPackageStyles.buttonText}>Add Package</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <Modal
                    transparent
                    animationType="fade"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={ModalStyle.modalOverlay}>
                        <View style={ModalStyle.modalBox}>
                            <Text style={ModalStyle.modalTitle}>Success</Text>
                            <Text style={ModalStyle.modalText}>Package has been successfully added!</Text>
                            <TouchableOpacity
                                style={[ModalStyle.modalButton, { width: 150 }]}
                                onPress={handleSuccess}
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