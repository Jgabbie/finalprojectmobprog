import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Header from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';
import EditPackageStyles from '../../styles/adminstyles/EditPackageStyles';
import ModalStyle from '../../styles/ModalStyle';
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat'

export default function EditPackage() {
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
            <Header openSidebar={() => { setSidebarVisible(true) }}/>
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)}/>

            <View style={EditPackageStyles.container}>
                <Text style={EditPackageStyles.headerText}>Edit Package</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={EditPackageStyles.formContainer}>
                    <TextInput style={EditPackageStyles.input} placeholder="Enter Package Name..." placeholderTextColor="#A9A9A9"/>
                    <TextInput style={EditPackageStyles.input} placeholder="Enter Price..." placeholderTextColor="#A9A9A9" keyboardType="numeric"/>
                    <TextInput style={EditPackageStyles.input} placeholder="Insert Photos..." placeholderTextColor="#A9A9A9"/>
                    <TextInput style={EditPackageStyles.input} placeholder="Accommodation" placeholderTextColor="#A9A9A9"/>
                    <TextInput style={EditPackageStyles.input} placeholder="Duration" placeholderTextColor="#A9A9A9"/>
                    <TextInput style={EditPackageStyles.input} placeholder="Transportation" placeholderTextColor="#A9A9A9"/>

                    <View style={EditPackageStyles.pickerWrapper}>
                        <Picker selectedValue={type} onValueChange={(item) => setType(item)} style={EditPackageStyles.picker}>
                            <Picker.Item label="Type" value="" color="#A9A9A9"/>
                            <Picker.Item label="Local" value="local"/>
                            <Picker.Item label="International" value="international"/>
                        </Picker>
                    </View>

                    <View style={EditPackageStyles.pickerWrapper}>
                        <Picker selectedValue={familyFriendly} onValueChange={(item) => setFamilyFriendly(item)} style={EditPackageStyles.picker}>
                            <Picker.Item label="Family Friendly" value="" color="#A9A9A9"/>
                            <Picker.Item label="Yes" value="yes"/>
                            <Picker.Item label="No" value="no"/>
                        </Picker>
                    </View>

                    <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Short Description..." placeholderTextColor="#A9A9A9" multiline={true}/>
                    <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Terms and Conditions..." placeholderTextColor="#A9A9A9" multiline={true}/>
                    <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Inclusions..." placeholderTextColor="#A9A9A9" multiline={true}/>
                    <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Exclusions..." placeholderTextColor="#A9A9A9" multiline={true}/>
                    <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Itinerary..." placeholderTextColor="#A9A9A9" multiline={true}/>

                    <View style={EditPackageStyles.buttonRow}>
                        <TouchableOpacity style={EditPackageStyles.backButton} onPress={() => navigation.navigate("packagemanagement")}>
                            <Text style={EditPackageStyles.buttonText}>BACK</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={EditPackageStyles.saveButton} onPress={() => setModalVisible(true)}>
                            <Text style={EditPackageStyles.buttonText}>Save Changes</Text>
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
                            <Text style={ModalStyle.modalText}>Changes for the package has been saved!</Text>
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