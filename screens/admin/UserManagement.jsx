import { View, Text, FlatList, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import UserManagementStyle from '../../styles/adminstyles/UserManagementStyle'
import ModalStyle from '../../styles/ModalStyle'
import { UserContext } from '../../context/UserContext'

export default function UserManagement() {

    const getData = useContext(UserContext)
    const { getUsers } = getData

    const allUsers = getUsers.map((element, index) => ({
        id: (index + 1).toString(),
        uNum: "U-000" + (index + 1),
        username: element.username,
        email: element.email,
        role: "User"
    }))

    const [isSidebarVisible, setSidebarVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalOkVisible, setModalOkVisible] = useState(false)

    const [modalEditVisible, setModalEditVisible] = useState(false)
    const [modalSaveVisible, setModalSaveVisible] = useState(false)
    const [modalSaveOkVisible, setModalSaveOkVisible] = useState(false)


    const [getAllUsers, setAllUsers] = useState([
        { id: "1", uNum: "U-0001", username: "juanlanuza", email: "jgl@gmail.com", role: "User" },
    ])

    const modalOK = () => {
        setModalOkVisible(false)
    }

    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={UserManagementStyle.container}>
                <Text style={UserManagementStyle.header}>User Management</Text>

                <View style={UserManagementStyle.statsContainer}>
                    <View style={UserManagementStyle.statsRow}>
                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>20</Text>
                            <Text style={UserManagementStyle.cardLabel}>Users</Text>
                        </View>

                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>12</Text>
                            <Text style={UserManagementStyle.cardLabel}>Verified</Text>
                        </View>
                    </View>

                    <View style={UserManagementStyle.statsRow}>
                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>6</Text>
                            <Text style={UserManagementStyle.cardLabel}>Unverified</Text>
                        </View>

                        <View style={UserManagementStyle.card}>
                            <Text style={UserManagementStyle.cardValue}>2</Text>
                            <Text style={UserManagementStyle.cardLabel}>Admins</Text>
                        </View>
                    </View>
                </View>

                <View style={UserManagementStyle.searchRow}>
                    <View style={UserManagementStyle.searchBar} >
                        <Ionicons name="search" size={16} />
                        <TextInput
                            style={UserManagementStyle.searchInput}
                            placeholder='Search ID or username'
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={UserManagementStyle.dropdownGroup}>
                        <View style={UserManagementStyle.dropdownButton} >
                            <Text style={UserManagementStyle.dropdownText} >Role</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserManagementStyle.dropdownIcon}
                            />
                        </View>
                        <View style={UserManagementStyle.dropdownButton} >
                            <Text style={UserManagementStyle.dropdownText} >Status</Text>
                            <Ionicons
                                name="chevron-down"
                                size={12}
                                color="#305797"
                                style={UserManagementStyle.dropdownIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={UserManagementStyle.tableHeader}>
                    <Text style={UserManagementStyle.headerCell}>ID</Text>
                    <Text style={UserManagementStyle.headerCell}>Username</Text>
                    <Text style={UserManagementStyle.headerCell}>Email</Text>
                    <Text style={UserManagementStyle.headerCell}>Role</Text>
                    <Text style={UserManagementStyle.headerCell}>Action</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={allUsers}
                    renderItem={({ item }) => (
                        <View style={UserManagementStyle.tableRow}>
                            <Text style={UserManagementStyle.tableCell}>{item.uNum}</Text>
                            <Text style={UserManagementStyle.tableCell}>{item.username}</Text>
                            <Text style={UserManagementStyle.tableCell}>{item.email}</Text>
                            <Text style={UserManagementStyle.tableCell}>{item.role}</Text>
                            <View>
                                <TouchableOpacity
                                    style={UserManagementStyle.actionButton}
                                    onPress={() => {
                                        setModalEditVisible(true)
                                    }}
                                >
                                    <Text style={UserManagementStyle.viewButtonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={UserManagementStyle.actionButton}
                                    onPress={() => {
                                        setModalVisible(true)
                                    }}
                                >
                                    <Text style={UserManagementStyle.viewButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                />
            </View>

            <Modal
                transparent
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => { setModalVisible }}
            >

                <View style={ModalStyle.modalOverlay}>
                    <View style={ModalStyle.modalBox}>
                        <Text style={ModalStyle.modalTitle}>Remove User</Text>
                        <Text style={ModalStyle.modalText}>Are you sure you want to remove this User?</Text>

                        <View style={ModalStyle.modalButtonContainer}>
                            <TouchableOpacity
                                style={ModalStyle.modalButton}
                                onPress={() => {
                                    setModalVisible(false)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={ModalStyle.modalCancelButton}
                                onPress={() => {
                                    setModalVisible(false)
                                    setModalOkVisible(true)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType='fade'
                visible={modalOkVisible}
                onRequestClose={() => { setModalOkVisible }}
            >

                <View style={ModalStyle.modalOverlay}>
                    <View style={ModalStyle.modalBox}>
                        <Text style={ModalStyle.modalTitle}>Remove Successful</Text>
                        <Text style={ModalStyle.modalText}>You have removed the user successfully!</Text>


                        <TouchableOpacity
                            style={ModalStyle.modalButton}
                            onPress={() => {
                                modalOK()
                            }}
                        >
                            <Text style={ModalStyle.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType='fade'
                visible={modalEditVisible}
                onRequestClose={() => { setModalEditVisible }}
            >

                <View style={ModalStyle.modalOverlay}>
                    <View style={ModalStyle.modalBoxEdit}>
                        <Text style={ModalStyle.modalTitle}>Edit User</Text>
                        <View>
                            <Text style={ModalStyle.userLabel}>Username</Text>
                            <TextInput style={ModalStyle.userInputs}></TextInput>

                            <View style={ModalStyle.fullNameContainer}>
                                <View>
                                    <Text style={ModalStyle.userLabel} >First Name</Text>
                                    <TextInput style={ModalStyle.nameInputs}></TextInput>
                                </View>

                                <View>
                                    <Text style={ModalStyle.userLabel}>Last Name</Text>
                                    <TextInput style={ModalStyle.nameInputs}></TextInput>
                                </View>
                            </View>

                            <Text style={ModalStyle.userLabel}>Email</Text>
                            <TextInput style={ModalStyle.userInputs}></TextInput>

                            <Text style={ModalStyle.userLabel}>Phone Number</Text>
                            <TextInput style={ModalStyle.userInputs}></TextInput>

                            <Text style={ModalStyle.userLabel}>Role</Text>
                            <TextInput style={ModalStyle.userInputs}></TextInput>
                        </View>

                        <View style={ModalStyle.modalButtonContainer}>
                            <TouchableOpacity
                                style={ModalStyle.modalEditButton}
                                onPress={() => {
                                    setModalSaveVisible(true)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Save Changes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={ModalStyle.modalCancelButton}
                                onPress={() => {
                                    setModalEditVisible(false)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType='fade'
                visible={modalSaveVisible}
                onRequestClose={() => { setModalSaveVisible }}
            >

                <View style={ModalStyle.modalOverlay}>
                    <View style={ModalStyle.modalBox}>
                        <Text style={ModalStyle.modalTitle}>Save Changes</Text>
                        <Text style={ModalStyle.modalText}>Are you sure you want to save these changes?</Text>

                        <View style={ModalStyle.modalButtonContainer}>
                            <TouchableOpacity
                                style={ModalStyle.modalButton}
                                onPress={() => {
                                    setModalEditVisible(false)
                                    setModalSaveVisible(false)
                                    setModalSaveOkVisible(true)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ModalStyle.modalCancelButton}
                                onPress={() => {
                                    setModalSaveVisible(false)
                                }}
                            >
                                <Text style={ModalStyle.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType='fade'
                visible={modalSaveOkVisible}
                onRequestClose={() => { setModalSaveOkVisible }}
            >

                <View style={ModalStyle.modalOverlay}>
                    <View style={ModalStyle.modalBox}>
                        <Text style={ModalStyle.modalTitle}>Save Successful</Text>
                        <Text style={ModalStyle.modalText}>Your changes has been successfully saved!</Text>


                        <TouchableOpacity
                            style={ModalStyle.modalButton}
                            onPress={() => {
                                setModalSaveOkVisible(false)
                            }}
                        >
                            <Text style={ModalStyle.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    )
}